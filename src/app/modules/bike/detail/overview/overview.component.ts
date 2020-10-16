import { Component, OnInit, Input, ElementRef, AfterViewInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Product, Media } from "src/app/core/model/product.model";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ModalComponent } from "src/app/shared/modal/modal.component";
import { environment } from "src/environments/environment";
// import { Overview } from "./overview.model";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
})
export class OverviewComponent implements OnInit {
  @Input() overview: Product;
  path = environment.filePath;
  iframeData = "";
  urlSafe: SafeResourceUrl;
  constructor(
    public dialog: MatDialog,
    private hostElement: ElementRef,
    public sanitizer: DomSanitizer
    ) {}

  ngOnInit() {
    const videoId = this.getVideoId(this.overview.media_urls);
    const url = `https://www.youtube.com/embed/${videoId}?wmode=opaque&amp;controls=&amp;rel=0&amp;showinfo=0&amp;theme=light&amp;autohide=1`;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  showFullImage(image: Media, i: number) {
    console.log(image, "imagess");
    this.openDialog(image, i);
  }
  openDialog(image: Media, i: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "100%",
      height: "100%",
      disableClose: false,
      panelClass: "my-full-screen-dialog",
      data: { curr: image, allImage: this.overview.long_shot_media, index: i },
    });
    dialogRef.afterClosed().subscribe((result) => {
      // this.email = result;
    });
  }
  getVideoId(media_urls: any[]) {
    const item = media_urls.find((ele) => ele.category === "youtube");
    if (!item) return "error";
    const url = item.url;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return "error";
    }
  }
}
