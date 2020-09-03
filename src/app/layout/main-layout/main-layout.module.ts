import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from './../components/header/header.component';
import { MainLayoutComponent } from './main-layout.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    RouterModule,
    MainRoutingModule,
    BsDropdownModule.forRoot(),
    SharedModule
  ]
})
export class MainLayoutModule {}
