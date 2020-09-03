import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as MODULE_ROUTES } from './../../modules/modules.routes';
import { MainLayoutComponent } from './../main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      ...MODULE_ROUTES,
      {
        path: 'login',
        loadChildren: () =>
          import('./../../auth/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('./../../auth/register/register.module').then(
            m => m.RegisterModule
          )
      },
      {
        path: 'forget-password',
        loadChildren: () =>
          import('./../../auth/reset-password/reset-password.module').then(
            m => m.ResetPasswordModule
          )
      },
      {
        path: 'reset-password',
        loadChildren: () =>
          import('./../../auth/reset-password/reset-password.module').then(
            m => m.ResetPasswordModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
