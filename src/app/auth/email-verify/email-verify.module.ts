import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
// import { AuthPageGuard } from "src/app/core/guards/auth-page.guard";
import { SharedModule } from "src/app/shared/shared.module";
import { EmailVerifyComponent } from './email-verify.component';

const routes: Routes = [
  {
    path: "",
    component: EmailVerifyComponent,
    // canActivate: [AuthPageGuard],
  },
];

@NgModule({
  declarations: [EmailVerifyComponent],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes)
  ]
})
export class EmailVerifyModule { }
