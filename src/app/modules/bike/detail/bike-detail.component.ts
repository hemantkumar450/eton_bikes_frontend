import { Component, HostListener } from "@angular/core";
import { Product, TechSupport, BuildSpecs } from "src/app/core/model/product.model";
import { ProductService } from "src/app/core/services/product.service";

@Component({
  selector: "app-bike-detail",
  templateUrl: "./bike-detail.component.html",
  styleUrls: ["./bike-detail.component.scss"],
})
export class BikeDetailComponent {
  productDetail: Product;
  buildSpecs: BuildSpecs;
  constructor(private productService: ProductService) {}

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
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

  ngOnInit() {
    this.getProductDetail();
    this.getProductBuildSpecs();
  }

  getProductBuildSpecs() {
    this.productService.getProductBuilds().subscribe((builds) => {
      this.buildSpecs = builds.data;
      console.log(this.buildSpecs, 'buuld');
    });
  }
  getProductDetail() {
    this.productService.getProductDetail().subscribe((product) => {
      this.productDetail = product.data;

      /** TODO this will get it from APIs */
      this.productDetail.long_shot_media = [
        "/assets/img/files/ftwilliam19_h1d6041_1.jpg",
        "/assets/img/files/ftwilliam19a63i0632_1.jpg",
        "/assets/img/files/ftwilliam19bb019807_0.jpg",
        "/assets/img/files/ftwilliam19_h1d7631_0.jpg",
        "/assets/img/files/ftwilliam19_m1_0797_2.jpg",
      ];
    });
  }
}
