import { Component, OnInit, Inject, ViewEncapsulation, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Media } from 'src/app/core/model/product.model';
import { environment } from 'src/environments/environment';

interface DialogData {
  curr: Media,
  allImage:[],
  index:number,
  singleImage?: string
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  path = environment.filePath;
  imageSrc:Media;
  allImage:Media[];
  // singleImage:string = '';
  prev:number;
  next:number;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      console.log(this.data, 'modal');
      this.imageSrc = this.data.curr;
      this.allImage = this.data.allImage;
      !this.data.singleImage && this.calculatePrevNext(this.data.index);
    }
    showImage(index: number) {
      // console.log(index);
      this.calculatePrevNext(index);
      this.imageSrc = this.allImage[index];
    }
  calculatePrevNext(curr: number) {
    this.prev = curr > 0 ? curr - 1 : this.allImage.length - 1;
    this.next = curr === this.allImage.length -1 ? 0 : curr + 1;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.imageSrc = null;
    this.allImage= null;
    this.prev = null;
    this.next = null;
  }
}