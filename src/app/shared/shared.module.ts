import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NguCarouselModule } from "@ngu/carousel";
import { HttpClientModule } from "@angular/common/http";
import { CarouselModule } from "primeng/carousel";
import { ButtonModule } from "primeng/button";

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NguCarouselModule,
  HttpClientModule,
  CarouselModule,
  ButtonModule,
];
const DIRECTIVES = [];
const COMPONENTS = [];

@NgModule({
  declarations: [DIRECTIVES, COMPONENTS],
  imports: [MODULES],
  exports: [MODULES, DIRECTIVES, COMPONENTS],
  entryComponents: [],
  providers: [],
})
export class SharedModule {}
