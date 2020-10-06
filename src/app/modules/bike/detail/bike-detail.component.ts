import { Component, ElementRef, HostListener, OnDestroy, ViewChild } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import {Product, ProductResponse, TechSupports} from './models/product.model';
@Component({
  selector: "app-bike-detail",
  templateUrl: "./bike-detail.component.html",
  styleUrls: ["./bike-detail.component.scss"],
})
export class BikeDetailComponent {
  productDetail:Product = null;
  techSupport: TechSupports;
  constructor(private http: HttpClient) {}

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    if (window.pageYOffset > 550) {
      let element = document.getElementById('fixedTab');
      element.classList.add('fixedTop');
      element.classList.remove('fixedBottom'); 
    } else {
     let element = document.getElementById('fixedTab');
       element.classList.remove('fixedTop'); 
       element.classList.add('fixedBottom');
    }
 }

 ngOnInit() {
  this.http.get<ProductResponse>('./assets/files/productDetail.json').subscribe(
    product => {
      this.productDetail = product.data;
      // this.productDetail = product.data;
      console.log(this.productDetail, 'Product Details');
      this.techSupport = {... this.productDetail.tech_support};
    }
  );
 }
    
}
