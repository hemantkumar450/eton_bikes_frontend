import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WheelsComponent } from './wheels.component';

const routes: Routes = [
  {
    path: "",
    component: WheelsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WheelsRoutingModule { }
