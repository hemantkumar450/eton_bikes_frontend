import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-brief",
  templateUrl: "./product-brief.component.html",
  styleUrls: ["./product-brief.component.scss"],
})
export class ProductBriefComponent implements OnInit {
  exLineup = "tab1";
  constructor() {}

  ngOnInit(): void {}
}
