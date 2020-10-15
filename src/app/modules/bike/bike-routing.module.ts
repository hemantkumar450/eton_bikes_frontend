import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { BikeComponent } from "./bike.component";
import { BikeDetailComponent } from "./detail/bike-detail.component";

const routes: Routes = [
  // {
  //   path: "",
  //   component: BikeComponent,
  // },
  {
    path: "detail/:slug",
    component: BikeDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeRoutingModule {}
