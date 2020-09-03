import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthType } from '@core/enum/auth-type.enum';
import { AuthService } from '@core/services/auth.service';
import { CustomValidators } from '@shared/validators/custom-validators';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent {
  forgotPasswordForm: FormGroup;
  isSubmitting: boolean;
  formSuccess: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    // Create Form
    this.buildForm();
  }

  onSubmit() {
    this.forgotPasswordForm.markAllAsTouched();

    if (this.forgotPasswordForm.valid) {
      this.isSubmitting = true;
      const email = this.forgotPasswordForm.getRawValue();

      this.authService.getChangePasswordLink(email).subscribe(
        () => {
          this.isSubmitting = false;
          this.formSuccess = true;
        },
        error => (this.isSubmitting = false)
      );
    }
  }

  openRegisterForm() {
    this.authService.closeAuthDialog();
    this.authService.openAuthDialog(AuthType.SIGN_UP);
  }

  closeModal() {
    this.authService.closeAuthDialog();
  }

  private buildForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, CustomValidators.emailValidator]]
    });
  }
}
