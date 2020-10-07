import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
// import { Lightbox } from 'ngx-lightbox';

interface Image {
  src: string,
  caption: string,
  thumb: string
}
@Component({
  selector: "app-detail-images",
  templateUrl: "./detail-images.component.html",
  styleUrls: ["./detail-images.component.scss"],
})
export class DetailImagesComponent implements OnInit {
  images = [
    "/assets/img/files/toptube_bs.jpg",
    "/assets/img/files/chainstay_detail.jpg",
    "/assets/img/files/flipchip_29.jpg",
    "/assets/img/files/tire_clearance_grey.jpg",
    "/assets/img/files/dhx2_coil_bs.jpg",
    "/assets/img/files/downtube_protector.jpg",
    "/assets/img/files/matte_headtube.jpg",
    "/assets/img/detail/chain_slapper.jpg",
    "/assets/img/files/internal_routing.jpg",
    "/assets/img/files/vpp_1.jpg",
    "/assets/img/files/my21_v10mx_details_001.jpg",
    "/assets/img/files/my21_v10mx_details_004.jpg",
    "/assets/img/files/my21_v10mx_details_005.jpg",
  ];
  public _albums: Image[] = [];
  constructor(public dialog: MatDialog) {
    // for (let i = 1; i <= this.images.length; i++) {
    //   const src = this.images[i];
    //   const caption = 'Image ' + i + ' caption here';
    //   const thumb = this.images[i];
    //   const album = {
    //      src,
    //      caption,
    //      thumb
    //   };
 
    //   this._albums.push(album);
    // }
  }

  ngOnInit(): void {}
  showFullImage(image:string, i:number) {
    console.log(image, 'imagess')
    this.openDialog(image, i);
  }
  openDialog(image: string, i:number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '100%',
      height: '100%',
      disableClose: false,
      panelClass: 'my-full-screen-dialog',
      data: { src : image, allImage: this.images, index: i}
    });
    dialogRef.afterClosed().subscribe(result => {
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
