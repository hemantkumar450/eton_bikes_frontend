import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/core/services/product.service";
import { Media } from "src/app/core/model/product.model";
import { environment } from "src/environments/environment";
interface ProductSlider {
  name: string;
  description: string;
  media: Media;
  is_new?: boolean;
}
@Component({
  selector: "app-product-brief",
  templateUrl: "./product-brief.component.html",
  styleUrls: ["./product-brief.component.scss"],
})
export class ProductBriefComponent implements OnInit {
  exLineup = 0;
  path = environment.filePath;
  noImage = environment.noImagePath;
  productBrief: ProductSlider[];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((product) => {
      console.log(product.data, "data product brief");
      let record = product.data.products;
      if (product.data.totalRecords > 10) {
        record = record.slice(0, 10);
        this.productBrief = record.map((ele, i) => {
          const media = ele.media_urls.find(
            (element) => element.category === "banner"
          );
          return {
            name: ele.name,
            description: ele.description,
            media,
            is_new: i === 0,
          };
        });
      } else {
        this.productBrief = record.map((ele, i) => {
          const media = ele.media_urls.find(
            (element) => element.category === "banner"
          );
          return {
            name: ele.name,
            description: ele.description,
            media,
            is_new: i === 0,
          };
        });
      }
    });
  }

  onBikeChangeEvent(index, type) {
    if (index == -1) {
      this.exLineup = this.productBrief.length - 1;
    } else if (index == this.productBrief.length) {
      this.exLineup = 0;
    } else if (type !== "onClick") {
      this.exLineup = index;
    }
  }
}
