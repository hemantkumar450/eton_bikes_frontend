import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BikeComponent } from './modules/bike/bike.component';
import { BikeDetailComponent } from './modules/bike/detail/bike-detail.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./layouts/main/main.module").then((m) => m.MainModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./auth/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "sign-up",
    loadChildren: () =>
      import("./auth/register/register.module").then((m) => m.RegisterModule),
  },
  {path:'bike', component:BikeComponent},
  {path:'bike-detail', component:BikeDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
