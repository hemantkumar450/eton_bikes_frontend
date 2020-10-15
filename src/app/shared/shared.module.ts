import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NguCarouselModule } from "@ngu/carousel";
import { HttpClientModule } from "@angular/common/http";

import { CarouselModule } from "primeng/carousel";
import { ButtonModule } from "primeng/button";
import {DropdownModule} from 'primeng/dropdown';


import { MatDialogModule } from "@angular/material/dialog";
import { ModalComponent } from "./modal/modal.component";
import { DefaultImageDirective } from './defaultImage.directive';

const MODULES = [
  CommonModule,
  FormsModule,
  MatDialogModule,
  ReactiveFormsModule,
  NguCarouselModule,
  HttpClientModule,
  CarouselModule,
  ButtonModule,
  DropdownModule
];
const DIRECTIVES = [DefaultImageDirective];
const COMPONENTS = [];

@NgModule({
  declarations: [DIRECTIVES, COMPONENTS, ModalComponent],
  imports: [MODULES],
  exports: [MODULES, DIRECTIVES, COMPONENTS],
  entryComponents: [],
  providers: [],
})
export class SharedModule {}
