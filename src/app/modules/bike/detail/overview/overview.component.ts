import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/core/model/product.model";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
// import { Overview } from "./overview.model";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
})
export class OverviewComponent implements OnInit {
  @Input() overview: Product;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}  

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
      data: { src : image, allImage: this.overview.long_shot_media, index: i}
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.email = result;
    });
  }
}
