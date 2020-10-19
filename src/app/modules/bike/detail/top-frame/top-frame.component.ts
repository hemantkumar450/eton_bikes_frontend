import { Component, Input, OnInit } from "@angular/core";
import { first } from "lodash";

@Component({
  selector: "app-top-frame",
  templateUrl: "./top-frame.component.html",
  styleUrls: ["./top-frame.component.scss"],
})
export class TopFrameComponent implements OnInit {
  @Input() bannerImages: any[] = [];
  imageUrl: string;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.bannerImages.length) {
      this.imageUrl = first(this.bannerImages).url;
    }
  }

  onImageChangeEvent(media) {
    this.imageUrl = media.url;
  }
}
