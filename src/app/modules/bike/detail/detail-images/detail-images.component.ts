import { Component, OnInit, Input } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ModalComponent } from "src/app/shared/modal/modal.component";
import { environment } from "src/environments/environment";
import { Media } from "src/app/core/model/product.model";
// import { Lightbox } from 'ngx-lightbox';

interface Image {
  src: string;
  caption: string;
  thumb: string;
}
@Component({
  selector: "app-detail-images",
  templateUrl: "./detail-images.component.html",
  styleUrls: ["./detail-images.component.scss"],
})
export class DetailImagesComponent implements OnInit {
  filePath = environment.filePath;
  @Input() close_up_media: Media[];
  images: Media[];
  _albums: Image[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.close_up_media);
    this.images = this.close_up_media;
  }
  showFullImage(image: object, i: number) {
    console.log(image, "imagess");
    this.openDialog(image, i);
  }
  openDialog(image: object, i: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "100%",
      height: "100%",
      disableClose: false,
      panelClass: "my-full-screen-dialog",
      data: { curr: image, allImage: this.images, index: i },
    });
    dialogRef.afterClosed().subscribe((result) => {
      // this.email = result;
    });
  }

  // open(index: number): void {
  //   // open lightbox
  //   this._lightbox.open(this._albums, index);
  // }

  // close(): void {
  //   // close lightbox programmatically
  //   this._lightbox.close();
  // }
}
