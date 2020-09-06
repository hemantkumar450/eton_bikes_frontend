import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuccessModal } from '@app/core/enum/success-modal.enum';
import { COMPANY_INFORMATION } from '@core/data/app-data';
import { ApiService } from '@core/services/api.service';
import { AuthService } from '@core/services/auth.service';
import { CustomValidators } from '@shared/validators/custom-validators';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  companyInformation = COMPANY_INFORMATION.contact;
  contactForm: FormGroup;
  loading: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  onSubmit() {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      this.loading = true;
      const contactPayload = this.contactForm.getRawValue();
      this.apiService.contactUs(contactPayload).subscribe(
        () => {
          this.loading = false;
          this.authService.openSuccessDialog(SuccessModal.CONTACT_FORM_SUCCESS);
          this.contactForm.reset();
        },
        error => (this.loading = false)
      );
    }
  }

  private buildForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.emailValidator]],
      phone: ['', [Validators.required, CustomValidators.phoneValidator]],
      message: ['', Validators.required]
    });
  }
}
