import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GearComponent } from './gear.component';

const routes: Routes = [
  {
    path: "",
    component: GearComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GearRoutingModule { }
