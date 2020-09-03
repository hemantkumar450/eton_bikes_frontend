import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../contact-us/contact-us.routes';
import { SharedModule } from './../../../shared/shared.module';
import { ContactUsComponent } from './contact-us.component';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule
  ],
  declarations: [ContactUsComponent],
  providers: []
})
export class ContactUsModule {}
