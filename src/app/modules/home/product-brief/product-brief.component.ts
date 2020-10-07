import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-brief",
  templateUrl: "./product-brief.component.html",
  styleUrls: ["./product-brief.component.scss"],
})
export class ProductBriefComponent implements OnInit {
  exLineup = 0;

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

  constructor() {}

  ngOnInit(): void {}

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
