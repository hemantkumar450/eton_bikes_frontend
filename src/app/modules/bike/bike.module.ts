import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BikeRoutingModule } from "./bike-routing.module";
import { BikeComponent } from "./bike.component";
import { SharedModule } from "../../shared/shared.module";
import { TopFrameComponent } from "./detail/top-frame/top-frame.component";
import { BikeDetailComponent } from "./detail/bike-detail.component";
import { TechSupportComponent } from './detail/tech-support/tech-support.component';
import { GeometryComponent } from './detail/geometry/geometry.component';
import { BuildPriceComponent } from './detail/build-price/build-price.component';
import { DetailImagesComponent } from './detail/detail-images/detail-images.component';
import { OverviewComponent } from './detail/overview/overview.component';

@NgModule({
  declarations: [BikeComponent, TopFrameComponent, BikeDetailComponent, TechSupportComponent, GeometryComponent, BuildPriceComponent, DetailImagesComponent, OverviewComponent],
  imports: [CommonModule, BikeRoutingModule, SharedModule],
})
export class BikeModule {}
