import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../shared/shared.module';
import { RefundComponent } from './refund.component';
import { routes } from './refund.routes';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule
  ],
  declarations: [RefundComponent],
  providers: []
})
export class RefundModule {}
