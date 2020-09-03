import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../shared/shared.module';
import { TermsComponent } from './terms.component';
import { routes } from './terms.routes';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule
  ],
  declarations: [TermsComponent],
  providers: []
})
export class TermsModule {}
