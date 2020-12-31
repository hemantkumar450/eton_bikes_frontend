import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NguCarouselModule } from "@ngu/carousel";
import { HttpClientModule } from "@angular/common/http";
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { CarouselModule } from "primeng/carousel";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { DialogModule } from "primeng/dialog";

import { MatDialogModule } from "@angular/material/dialog";
import { ModalComponent } from "./modal/modal.component";
import { DefaultImageDirective } from "./defaultImage.directive";

import { LoadingButtonDirective } from "./directives/loading-button.directive";
import { AuthDialogComponent } from "./components/auth-dialog/auth-dialog.component";
import { InputValidationComponent } from "./components/input-validator/input-validation.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { ForgotPasswordFormComponent } from "./components/forgot-password-form/forgot-password-form.component";
import { RegisterFormComponent } from "./components/register-form/register-form.component";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const MODULES = [
  CommonModule,
  FormsModule,
  MatDialogModule,
  DialogModule,
  ReactiveFormsModule,
  NguCarouselModule,
  HttpClientModule,
  CarouselModule,
  ButtonModule,
  DropdownModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
];
const DIRECTIVES = [DefaultImageDirective, LoadingButtonDirective];
const COMPONENTS = [
  InputValidationComponent,
  AuthDialogComponent,
  LoginFormComponent,
  ForgotPasswordFormComponent,
  RegisterFormComponent,
];

@NgModule({
  declarations: [DIRECTIVES, COMPONENTS, ModalComponent],
  imports: [MODULES, ModalModule.forRoot()],
  exports: [MODULES, ModalModule, DIRECTIVES, COMPONENTS],
  entryComponents: [AuthDialogComponent],
  providers: [],
})
export class SharedModule {}
