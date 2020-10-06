import { Component, OnInit, Input } from "@angular/core";
import { TechSupport } from "src/app/auth/core/model/product.model";

@Component({
  selector: "app-tech-support",
  templateUrl: "./tech-support.component.html",
  styleUrls: ["./tech-support.component.scss"],
})
export class TechSupportComponent implements OnInit {
  techSupp = "faqs";
  @Input() techSupport: TechSupport;

  constructor() {}

  ngOnInit(): void {}
}
