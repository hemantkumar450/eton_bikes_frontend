import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Product, BuildSpecs } from "src/app/core/model/product.model";
import { ProductService } from "src/app/core/services/product.service";

@Component({
  selector: "app-bike-detail",
  templateUrl: "./bike-detail.component.html",
  styleUrls: ["./bike-detail.component.scss"],
})
export class BikeDetailComponent implements OnInit {
  productDetail: Product;
  buildSpecs: BuildSpecs[];
  bannerImages: any[] = [];
  public currentActive = 0;
  loader = true;
  urlSafe: SafeResourceUrl;
  @ViewChild("toggleScroll") toggleScroll: ElementRef;
  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    // NAv active class start
    const overview: HTMLElement | null = document.querySelector("#overview");
    const build_price: HTMLElement | null = document.querySelector(
      "#build_price"
    );
    const detail_images: HTMLElement | null = document.querySelector(
      "#detail_images"
    );
    const geometry: HTMLElement | null = document.querySelector("#geometry");
    const tech_support: HTMLElement | null = document.querySelector(
      "#tech_support"
    ); // debugger;

    if (overview && build_price && detail_images && geometry && tech_support) {
      if (
        window.pageYOffset >= overview.offsetTop &&
        window.pageYOffset < build_price.offsetTop
      ) {
        this.currentActive = 1;
      } else if (
        window.pageYOffset >= build_price.offsetTop &&
        window.pageYOffset < detail_images.offsetTop
      ) {
        this.currentActive = 2;
      } else if (
        window.pageYOffset >= detail_images.offsetTop &&
        window.pageYOffset < geometry.offsetTop
      ) {
        this.currentActive = 3;
      } else if (
        window.pageYOffset >= geometry.offsetTop &&
        window.pageYOffset < tech_support.offsetTop
      ) {
        this.currentActive = 4;
      } else if (window.pageYOffset >= tech_support.offsetTop) {
        this.currentActive = 5;
      } else {
        this.currentActive = 0;
      }
    }
    // Nav active class end

    if (window.pageYOffset > 550) {
      let element = document.getElementById("fixedTab");
      element.classList.add("fixedTop");
      element.classList.remove("fixedBottom");
    } else {
      let element = document.getElementById("fixedTab");
      element.classList.remove("fixedTop");
      element.classList.add("fixedBottom");
    }
  }

  scrollToElement(to) {
    this.toggleScroll.nativeElement.classList.remove("js-page-nav-active");
    document
      .querySelector(`#${to}`)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    public sanitizer: DomSanitizer
  ) {
    router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        this.getProductDetail();
      }
    });
  }

  ngOnInit() {
    this.getProductDetail();
  }

  handleSroll(event: Event) {
    event.stopImmediatePropagation();
    this.toggleScroll.nativeElement.classList.toggle("js-page-nav-active");
  }

  getProductDetail() {
    const slug = this.route.snapshot.params.slug || undefined;
    if (!slug) {
      return;
    }
    this.productService.getProductDetail(slug).subscribe(
      (product) => {
        this.productDetail = product.data;
        this.buildSpecs = this.productDetail.sub_products;
        this.bannerImages = this.productDetail.media_urls.filter(
          (media) => media.category == "banner"
        );
        console.log(this.productDetail.close_up_media, "details");
        this.getYouTubeLink();
      },
      (error) => {},
      () => {
        this.loader = false;
      }
    );
  }

  getYouTubeLink() {
    const videoId = this.getVideoId(this.productDetail.media_urls);
    const url = `https://www.youtube.com/embed/${videoId}?wmode=opaque&amp;controls=&amp;rel=0&amp;showinfo=0&amp;theme=light&amp;autohide=1`;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getVideoId(media_urls: any[]) {
    const item = media_urls.find((ele) => ele.category === "youtube");
    if (!item) return "error";
    const url = item.url;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return "error";
    }
  }
}
