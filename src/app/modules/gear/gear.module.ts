import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GearRoutingModule } from './gear-routing.module';
import { GearComponent } from './gear.component';


@NgModule({
  declarations: [GearComponent],
  imports: [
    CommonModule,
    GearRoutingModule
  ]
})
export class GearModule { }
