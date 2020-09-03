import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ChangePasswordComponent } from './change-password.component';

const routes: Routes = [
  {
    path: '',
    component: ChangePasswordComponent
  }
];
@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})

export class ChangePasswordModule { }
