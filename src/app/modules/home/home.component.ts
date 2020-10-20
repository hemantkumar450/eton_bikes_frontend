import { ChangeDetectorRef, Component, ViewChild, OnInit } from "@angular/core";
import { NguCarousel, NguCarouselConfig } from "@ngu/carousel";
import { PageModal } from "src/app/core/model/page.model";
import { PageService } from "src/app/core/services/page.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  page: PageModal;
  constructor(
    private cdr: ChangeDetectorRef,
    private pageService: PageService
  ) {}
  name = "Angular";
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild("myCarousel") myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
  carouselItems = [1, 2, 3];

  exLineup = "tab1";
  loader = true
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.getPageByType();
  }

  getPageByType() {
    this.pageService.getPageByType().subscribe(
      (res) => {
      this.page = res.data;
      console.log(this.page);
    },
    (error) => {

    },
    () => {
      this.loader = false;
    }
    );
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
}
