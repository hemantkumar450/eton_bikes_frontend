import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivacyComponent } from './privacy.component';
import { routes } from './privacy.routes';
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, RouterModule],
  declarations: [PrivacyComponent],
  providers: []
})
export class PrivacyModule {}
