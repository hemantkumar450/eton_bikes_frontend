import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
// import { SharedModule } from '@shared/shared.module';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { BikeComponent } from "../modules/bike/bike.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BikeComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutsModule {}
