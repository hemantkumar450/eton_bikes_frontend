import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SharedModule } from './../../../shared/shared.module';
import { FaqComponent } from './faq.component';
import { routes } from './faq.routes';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule,
    AccordionModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [FaqComponent],
  providers: []
})
export class FaqModule {}
