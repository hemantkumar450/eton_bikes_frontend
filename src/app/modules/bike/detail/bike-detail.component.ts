import { Component, ElementRef, HostListener, OnDestroy, ViewChild } from "@angular/core";

@Component({
  selector: "app-bike-detail",
  templateUrl: "./bike-detail.component.html",
  styleUrls: ["./bike-detail.component.scss"],
})
export class BikeDetailComponent {

  constructor() {}

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
    
}
