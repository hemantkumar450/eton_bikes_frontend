import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaydirtRoutingModule } from './paydirt-routing.module';
import { PaydirtComponent } from './paydirt.component';


@NgModule({
  declarations: [PaydirtComponent],
  imports: [
    CommonModule,
    PaydirtRoutingModule
  ]
})
export class PaydirtModule { }
