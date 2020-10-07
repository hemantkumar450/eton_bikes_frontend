import { Component, OnInit, Inject, ViewEncapsulation, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

interface DialogData {
  src: string,
  allImage:[],
  index:number
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  imageSrc:string;
  allImage:[] = [];
  prev:number;
  next:number;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      console.log(this.data, 'modal');
      this.imageSrc = this.data.src;
      this.allImage = this.data.allImage;
      this.calculatePrevNext(this.data.index);
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
    this.imageSrc = '';
    this.allImage= null;
    this.prev = null;
    this.next = null;
  }
}