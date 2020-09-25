import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {

  public bike_menu:boolean = false;
  
  constructor() {}

  ngOnInit() {
  }

  showBikes(){
    this.bike_menu = !this.bike_menu;
  }
  
}
