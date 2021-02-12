import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DEFAULT_APP_DATA } from "src/app/core/app-data";
import { AuthService } from "src/app/core/services/auth.service";
// import { AppConstant } from "src/app/shared/constants/app.constant";
import { CustomValidators } from "src/app/shared/validators/custom-validators";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  user: any;
  contactForm: FormGroup;
  loading: boolean;
  contactInfo = DEFAULT_APP_DATA.contact;
  showSuccessMessage: boolean;
  contactUserName: string;

  constructor(
    private userService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  onSubmit() {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) {
      return;
    }

    this.createContactEnquiry();
  }

  createContactEnquiry() {
    this.loading = true;
    const formValues = this.contactForm.getRawValue();
    this.contactUserName = formValues.name;
    formValues.message = `I am interested in ${formValues.interest} in ${formValues.city}. ${formValues.message}`;
    this.userService.addToContact(formValues).subscribe(
      () => {
        this.loading = false;
        this.showSuccessMessage = true;
        this.contactForm.reset();
      },
      (error) => {
        this.loading = false;
        // this.toastrService.error(error.message);
      }
    );
  }

  private buildForm() {
    this.contactForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, CustomValidators.emailValidator]],
      phone_number: [
        "",
        [Validators.required, CustomValidators.phoneValidator],
      ],
      message: ["", Validators.required],
      interest: [null, Validators.required],
      city: [null, Validators.required],
    });
  }
}
