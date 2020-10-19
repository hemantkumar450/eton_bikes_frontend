import { Component } from "@angular/core";
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthType } from "src/app/core/enum/auth-type.enum";
import { User } from "src/app/core/model/user.model";
import { AuthService } from "src/app/core/services/auth.service";
import { CustomValidators } from "../../validators/custom-validators";

declare let ga: any;

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent {
  isDialogModal = true;

  registerForm: FormGroup;
  isSubmitting: boolean;
  responseError: string;

  // This will animate the label to feel like material
  isGenderDropDownOpen: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    // Create Form
    this.buildForm();
  }

  onSubmit() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      this.isSubmitting = true;
      const loginPayload: User = this.registerForm.getRawValue();
      // this.authService.signUp(loginPayload).subscribe(
      //   () => {
      //     this.isSubmitting = false;
      //   },
      //   (error) => {
      //     this.isSubmitting = false;
      //     this.responseError = error.error.message || "unable to proceed";
      //   }
      // );
    }
  }

  openLoginForm() {
    this.authService.closeAuthDialog();
    this.authService.openAuthDialog(AuthType.LOGIN);
  }

  existingEmailValidator() {
    // return (control: AbstractControl): Observable<ValidationErrors | null> => {
    //   return this.authService.checkIfUEmailExists(control.value).pipe(
    //     map((res) => {
    //       return res.doesExist ? { emailTaken: true } : null;
    //     })
    //   );
    // };
  }

  private buildForm() {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: [
        "",
        {
          validators: [Validators.required, CustomValidators.emailValidator],
          // asyncValidators: [this.existingEmailValidator()],
          updateOn: "blur",
        },
      ],
      mobile: ["", [Validators.required, CustomValidators.phoneValidator]],
      password: ["", Validators.required],
    });
  }
}
