import { Component, OnInit } from "@angular/core";
import { AuthType } from "src/app/core/enum/auth-type.enum";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public bike_menu: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  showBikes() {
    console.log(this.bike_menu, "toggle ");
    this.bike_menu = !this.bike_menu;
  }

  handleToggleCondition(data) {
    console.log(data, "received form nav bar");
    this.bike_menu = data;
  }

  navToggle() {
    const html = document.getElementsByTagName('html')[0];
    html.classList.add('js-mobile-menu--is-active');
  }  

  openLoginModal() {
    this.authService.openAuthDialog(AuthType.LOGIN);
  }
}
