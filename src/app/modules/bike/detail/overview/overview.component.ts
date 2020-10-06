import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/auth/core/model/product.model";
// import { Overview } from "./overview.model";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
})
export class OverviewComponent implements OnInit {
  @Input() overview: Product;
  constructor() {}

  ngOnInit() {}
}
