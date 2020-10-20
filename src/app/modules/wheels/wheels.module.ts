import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WheelsRoutingModule } from './wheels-routing.module';
import { WheelsComponent } from './wheels.component';


@NgModule({
  declarations: [WheelsComponent],
  imports: [
    CommonModule,
    WheelsRoutingModule
  ]
})
export class WheelsModule { }
