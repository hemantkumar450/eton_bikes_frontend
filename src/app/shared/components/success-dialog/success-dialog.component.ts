import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SuccessModal } from './../../../core/enum/success-modal.enum';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent {
  @Input() activeModalType: SuccessModal;
  SuccessModalType = SuccessModal;

  constructor(private bsModalRef: BsModalRef) {}

  close() {
    this.bsModalRef.hide();
  }
}
