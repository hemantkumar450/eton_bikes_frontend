import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "bike",
    loadChildren: () => import("./bike/bike.module").then((m) => m.BikeModule),
  },
];
