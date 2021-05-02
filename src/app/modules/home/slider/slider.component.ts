import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { section } from "src/app/core/model/page.model";
import { Media } from "src/app/core/model/product.model";
import { ModalComponent } from "src/app/shared/modal/modal.component";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit {
  @Input() section: section;
  path = environment.filePath;
  sliderImages: any;
  constructor(public dialog: MatDialog) {}
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

  openDialog(image: Media, i: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "100%",
      height: "100%",
      disableClose: false,
      panelClass: "my-full-screen-dialog",
      data: { curr: image, allImage: this.sliderImages.flat(), index: i },
    });
    dialogRef.afterClosed().subscribe((result) => {
      // this.email = result;
    });
  }
}
