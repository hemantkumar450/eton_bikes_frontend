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
    path: "privacy-policy",
    loadChildren: () =>
      import("./privacy-policy/privacy-policy.module").then(
        (m) => m.PrivacyPolicyModule
      ),
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
    path: "contact-us",
    loadChildren: () =>
      import("./contact-us/contact-us.module").then((m) => m.ContactUsModule),
  },
  {
    path: "about-us",
    loadChildren: () =>
      import("./about-us/about-us.module").then((m) => m.AboutUsModule),
  },
  {
    path: "demo",
    loadChildren: () => import("./demo/demo.module").then((m) => m.DemoModule),
  },
  {
    path: "cart",
    loadChildren: () => import("./cart/cart.module").then((m) => m.CartModule),
  },
  {
    path: "validate-email",
    loadChildren: () =>
      import("./validate/validate.module").then((m) => m.ValidateModule),
  },
];
