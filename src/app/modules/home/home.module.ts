import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { NguCarouselModule } from '@ngu/carousel';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AnimateOnScrollModule.forRoot(),
    NguCarouselModule
  ]
})
export class HomeModule {}
