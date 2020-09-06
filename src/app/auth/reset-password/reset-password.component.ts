import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthType } from '@core/enum/auth-type.enum';
import { AuthService } from '@core/services/auth.service';
import { CustomValidators } from '@shared/validators/custom-validators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  isSubmitting: boolean;
  formSuccess: boolean;
  requestToken: string;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    // Create Form
    this.buildForm();
  }

  ngOnInit() {
    if (!this.authService.getToken()) {
      this.router.routerState.root.queryParams.subscribe(params => {
        // tslint:disable-next-line: no-string-literal
        if (params && params['token']) {
          this.requestToken = params['token'];
        }
      });
    } else {
      this.router.navigateByUrl('/user');
    }
  }

  onSubmit() {
    this.forgotPasswordForm.markAllAsTouched();

    if (this.forgotPasswordForm.valid) {
      this.isSubmitting = true;
      const formValues = this.forgotPasswordForm.getRawValue();

      this.authService
        .resetPassword(this.requestToken, formValues.newPassword)
        .subscribe(
          () => {
            this.isSubmitting = false;
            this.formSuccess = true;
          },
          error => (this.isSubmitting = false)
        );
    }
  }

  openLoginForm() {
    this.authService.closeAuthDialog();
    this.router.navigateByUrl('/');
    this.authService.openAuthDialog(AuthType.LOGIN);
  }

  private buildForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required]]
    });
  }
}
