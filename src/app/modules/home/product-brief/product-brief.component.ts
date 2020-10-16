import { Component, OnInit } from "@angular/core";
import { ProductService } from 'src/app/core/services/product.service';
import { Media } from 'src/app/core/model/product.model';
import { environment } from 'src/environments/environment';
interface ProductSlider {
  name:string,
  description: string,
  media: Media,
  is_new?: boolean
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
  bikes = [
    {
      name: "V10",
      description: "Puzzling Ain’t Easy",
      _id: "1",
      image_url: "/assets/img/thumbs/my21_thumb_0000_my21_v10_mx_xo1.jpg",
      is_new: true,
    },
    {
      name: "Nomad",
      description: "V10 handling at Syndicate speeds.",
      _id: "2",
      image_url: "/assets/img/thumbs/my21_thumb_0000_my21_v10_mx_xo1.jpg",
      is_new: false,
    },
    {
      name: "Megatower",
      description: "The ultimate power-wheeling, bump-chewing sidekick.",
      _id: "3",
      image_url: "/assets/img/thumbs/my21_thumb_0000_my21_v10_mx_xo1.jpg",
      is_new: false,
    },
    {
      name: "Heckler",
      description: "Let The Heckling Begin",
      _id: "4",
      image_url: "/assets/img/thumbs/my21_thumb_0000_my21_v10_mx_xo1.jpg",
      is_new: false,
    },
    {
      name: "Bronson",
      description: "Not to be typecast",
      _id: "5",
      image_url: "/assets/img/thumbs/my21_thumb_0000_my21_v10_mx_xo1.jpg",
      is_new: false,
    },
    {
      name: "5010",
      description: "Get creative with your surroundings.",
      _id: "6",
      image_url: "/assets/img/thumbs/my21_thumb_0000_my21_v10_mx_xo1.jpg",
      is_new: false,
    },
  ];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe(
      product => {
        console.log(product.data, 'data product brief')
        let record = product.data.products;
        if (product.data.totalRecords > 10) {
          record = record.slice(0, 10);
          this.productBrief = record.map((ele, i) => {
            const media = ele.media_urls.find(element => element.category === 'banner');
            return {
              name: ele.name,
              description: ele.description,
              media,
              is_new: i === 0
            }
          })
        } else {
          this.productBrief = record.map((ele, i) => {
            const media = ele.media_urls.find(element => element.category === 'banner');
            return {
              name: ele.name,
              description: ele.description,
              media,
              is_new: i === 0
            }
          })
        }
        // console.log(this.productBrief, 'brief')
      }
    )
  }

  onBikeChangeEvent(index, type) {
    if (index == -1) {
      this.exLineup = this.bikes.length - 1;
    } else if (index == this.bikes.length) {
      this.exLineup = 0;
    } else if (type !== "onClick") {
      this.exLineup = index;
    }
  }
}
