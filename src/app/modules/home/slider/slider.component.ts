import { Component, OnInit, Input } from "@angular/core";
import { section } from "src/app/core/model/page.model";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit {
  @Input() section: section;
  path = environment.filePath;
  sliderImages: any[];
  constructor() {}
  name = "Angular";
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  

  exLineup = "tab1";

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.sliderImages = this.splitArray(this.section.medias, 3);
    console.log(this.sliderImages);
  }

  splitArray(arr, size) {
    console.log(arr, size);
    const len = (arr && arr.slice && arr.length) | 0;
    if (size !== Math.floor(size) || size < 1) return null;
    for (var chunks = [], i = 0; i < len; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }
  getSliderClass(parent, curr) {
    let className = "";
    if (parent === 0) {
      className = curr === 0 && "cat-963 cat-985 cat-560";
    } else {
      switch (curr) {
        case 0:
          className = "cat-562 cat-560";
          break;
        case 1:
          className = "cat-560";
          break;
        case 3:
          className = "cat-560";
          break;
        case 4:
          className = "cat-560";
          break;
        case 5:
          className = "cat-560 cat-11";
          break;
      }
    }
    return className;
  }
}
