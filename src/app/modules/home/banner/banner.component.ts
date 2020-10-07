import { Component, Input, OnInit } from "@angular/core";
import { section } from "src/app/core/model/page.model";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit {
  @Input() section: section;
  constructor() {}

  ngOnInit(): void {}
}
