import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BikeRoutingModule } from "./bike-routing.module";
import { BikeComponent } from "./bike.component";

@NgModule({
  declarations: [BikeComponent],
  imports: [CommonModule, BikeRoutingModule],
})
export class BikeModule {}
