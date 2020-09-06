import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {
  LazyLoadImageModule,
  intersectionObserverPreset
} from 'ng-lazyload-image';

// DIRECTIVES
import { LoadingButtonDirective } from './directives/loading-button.directive';
import { DisableInputDirective } from './directives/disable-input.directive';
import { ScrollToInvalidField } from './directives/scroll-to-invalid-field.directive';

// COMPONENTS
import { InputValidationComponent } from './components/input-validation/input-validation.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

import { LoadingPlaceholderComponent } from './components/loading-placeholder/loading-placeholder.component';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TextMaskModule } from 'angular2-text-mask';
import { ClickOutsideModule } from 'ng-click-outside';

const COMPONENTS = [
  AuthDialogComponent,
  InputValidationComponent,
  LoginFormComponent,
  RegisterFormComponent,
  LoadingPlaceholderComponent,
  LoaderComponent,
  SuccessDialogComponent,
  ChangePasswordComponent
];

const MODULES = [
  CommonModule,
  NgSelectModule,
  FormsModule,
  TextMaskModule,
  ReactiveFormsModule,
  ClickOutsideModule
];

const DIRECTIVES = [
  LoadingButtonDirective,
  DisableInputDirective,
  ScrollToInvalidField
];

@NgModule({
  declarations: [...DIRECTIVES, ...COMPONENTS, ForgotPasswordFormComponent],
  imports: [
    ...MODULES,
    RouterModule,
    ModalModule.forRoot(),
    LazyLoadImageModule.forRoot(intersectionObserverPreset)
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...MODULES,
    ModalModule,
    LazyLoadImageModule
  ],
  entryComponents: [AuthDialogComponent, SuccessDialogComponent]
})
export class SharedModule {}
