import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthType } from './../../../core/enum/auth-type.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent {
  AUTH_TYPES = AuthType;
  @Input() authType: AuthType;

  constructor(private bsModalRef: BsModalRef, private router: Router) {}

  decline() {
    this.bsModalRef.hide();
  }

  accept() {
    this.bsModalRef.hide();
  }

  openSignUpForm() {
    this.authType = AuthType.SIGN_UP;
  }

  openLoginForm() {
    this.authType = AuthType.LOGIN;
  }
  openChangePasswordForm() {
    this.authType = AuthType.CHANGE_PASSWORD;
  }

  onLoginSuccess() {
    this.router.navigateByUrl('/user-dashboard/index');
  }
}
