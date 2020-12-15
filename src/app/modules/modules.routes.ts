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
  {
    path: "wheels",
    loadChildren: () =>
      import("./wheels/wheels.module").then((m) => m.WheelsModule),
  },
  {
    path: "paydirt",
    loadChildren: () =>
      import("./paydirt/paydirt.module").then((m) => m.PaydirtModule),
  },
  {
    path: "gear",
    loadChildren: () => import("./gear/gear.module").then((m) => m.GearModule),
  },
  {
    path: "teams",
    loadChildren: () =>
      import("./teams/teams.module").then((m) => m.TeamsModule),
  },
  {
    path: "news",
    loadChildren: () => import("./news/news.module").then((m) => m.NewsModule),
  },
  {
    path: "demo",
    loadChildren: () => import("./demo/demo.module").then((m) => m.DemoModule),
  },
  {
    path: "cart",
    loadChildren: () => import("./cart/cart.module").then((m) => m.CartModule),
  },
];
