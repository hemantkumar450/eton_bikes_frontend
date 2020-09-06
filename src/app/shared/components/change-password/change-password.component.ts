import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthType } from '@core/enum/auth-type.enum';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;

  isDialogModal = true;
  isSubmitting: boolean;

  formSubmit: boolean;
  returnUrl: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    // Create Form
    this.buildForm();
  }

  openForgotPasswordForm() {
    this.authService.closeAuthDialog();
    this.authService.openAuthDialog(AuthType.FORGOT_PASSWORD);
  }

  private buildForm() {
    this.changePasswordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]]
    });
  }

  clearForm() {
    this.isSubmitting = false;
    this.changePasswordForm.reset();
  }

  ngOnInit() {}

  onSubmit() {}
}
