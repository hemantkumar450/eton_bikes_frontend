import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NguCarouselModule } from "@ngu/carousel";
import { HttpClientModule } from "@angular/common/http";

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NguCarouselModule,
  HttpClientModule,
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
