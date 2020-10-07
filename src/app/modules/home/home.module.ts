import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { BannerComponent } from './banner/banner.component';
import { ProductBriefComponent } from './product-brief/product-brief.component';
import { SliderComponent } from './slider/slider.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { MediaPanelComponent } from './media-panel/media-panel.component';

@NgModule({
  declarations: [HomeComponent, BannerComponent, ProductBriefComponent, SliderComponent, SocialMediaComponent, MediaPanelComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
