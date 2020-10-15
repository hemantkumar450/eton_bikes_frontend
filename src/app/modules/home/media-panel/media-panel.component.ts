import { Component, Input, OnInit } from "@angular/core";
import { section } from "src/app/core/model/page.model";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-media-panel",
  templateUrl: "./media-panel.component.html",
  styleUrls: ["./media-panel.component.scss"],
})
export class MediaPanelComponent implements OnInit {
  @Input() section: section;
  @Input() image: string = "";
  path = environment.filePath;
  noImage = environment.noImagePath;
  constructor() {}

  ngOnInit(): void {}

  setImageSide() {
    let css = null;
    switch (this.section.media_side) {
      case "left":
        css = "media-panel--beige media-panel--text-last";
        break;
      case "right":
        css = "media-panel--beige media-panel--text-first";
        break;
      case "center":
        css = "media-panel--full-bg media-panel--text-first";
        break;
    }
    return css;
  }
}
