import { Component, HostListener, OnInit } from "@angular/core";
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

  constructor(private productService: ProductService) {}
  public currentActive = 0;
  loader = true;
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
    document
      .querySelector(`#${to}`)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
  ngOnInit() {
    this.getProductDetail();
  }

  getProductDetail() {
    this.productService.getProductDetail().subscribe(
      (product) => {
      this.productDetail = product.data;
      this.buildSpecs = this.productDetail.sub_products;
      this.bannerImages = this.productDetail.media_urls.filter(
        (media) => media.category == "banner"
      );
      console.log(this.productDetail.close_up_media, "details");
    },
    (error) => {

    },
    () => {
      this.loader = false;
    }
    );
  }
}
