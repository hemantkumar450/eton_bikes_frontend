import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaydirtComponent } from './paydirt.component';

const routes: Routes = [
  {
    path: "",
    component: PaydirtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaydirtRoutingModule { }
