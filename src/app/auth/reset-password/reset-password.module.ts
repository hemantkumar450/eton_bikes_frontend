import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { AuthPageGuard } from '@core/guards/auth-page.guard';
import { ResetPasswordComponent } from './reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent,
    canActivate: [AuthPageGuard]
  }
];

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class ResetPasswordModule {}
