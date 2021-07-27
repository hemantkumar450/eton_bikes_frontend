import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { section } from "src/app/core/model/page.model";
import { ModalComponent } from "src/app/shared/modal/modal.component";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit {
  path = environment.filePath;
  @Input() section: section;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(image: object, i: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "100%",
      height: "100%",
      disableClose: false,
      panelClass: "my-full-screen-dialog",
      data: { curr: image, allImage: this.section.medias, index: i },
    });
    dialogRef.afterClosed().subscribe();
  }

  showFullImage(image: object, i: number) {
    this.openDialog(image, i);
  }
}
