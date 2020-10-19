import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {

  public bike_menu = false;
  constructor() {}

  ngOnInit() {
  }

  showBikes(){
    console.log(this.bike_menu, 'toggle ');
    this.bike_menu = !this.bike_menu;
  }

  handleToggleCondition(data) {
    console.log(data, 'received form nav bar');
    this.bike_menu = data;
  }
}
