import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthType } from "src/app/core/enum/auth-type.enum";
import { User } from "src/app/core/model/user.model";
import { AuthService } from "src/app/core/services/auth.service";
import { CustomValidators } from "../../validators/custom-validators";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent {
  @Input() isLoginPage: boolean;
  @Output()
  loginSuccessEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  loginForm: FormGroup;

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

  onSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this.isSubmitting = true;
      const loginPayload: User = this.loginForm.getRawValue();

      this.authService.signInWithEmailAndPassword(loginPayload).subscribe(
        () => {
          this.isSubmitting = false;
          this.authService.closeAuthDialog();
        },
        (error) => {
          this.isSubmitting = false;
          
          const formControl = this.loginForm.get("password");
          if (formControl) {
            formControl.setErrors({
              serverError: error.error.message || "unable to proceed",
            });
          }
        }
      );
    }
  }

  onLoginSuccess() {
    this.router.navigateByUrl("/");
    this.clearForm();
  }

  openRegisterForm() {
    this.authService.closeAuthDialog();
    this.authService.openAuthDialog(AuthType.SIGN_UP);
  }

  openForgotPasswordForm() {
    this.authService.closeAuthDialog();
    this.authService.openAuthDialog(AuthType.FORGOT_PASSWORD);
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, CustomValidators.emailValidator]],
      password: ["", [Validators.required]],
    });
  }

  clearForm() {
    this.isSubmitting = false;
    this.loginForm.reset();
  }
}
