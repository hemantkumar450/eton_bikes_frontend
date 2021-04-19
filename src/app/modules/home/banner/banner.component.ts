import { Component, Input, OnInit } from "@angular/core";
import { section } from "src/app/core/model/page.model";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit {
  path = environment.filePath;
  @Input() section: section;
  constructor() {}

  ngOnInit(): void {
    console.log(this.path + this.section.medias[0].media_link);
  }
}
