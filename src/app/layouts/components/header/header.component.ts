import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthType } from "src/app/core/enum/auth-type.enum";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public bike_menu: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  showBikes() {
    // console.log(this.bike_menu, "toggle ");
    this.bike_menu = !this.bike_menu;
  }
  toggleMobileNav() {
    const html = document.getElementsByTagName("html")[0];
    html.classList.remove("js-mobile-menu--is-active");
  }
  handleToggleCondition(data) {
    // console.log(data, "received form nav bar");
    this.bike_menu = data;
    const html = document.getElementsByTagName("html")[0];
    html.classList.remove("js-mobile-menu--is-active");
  }

  navToggle() {
    const html = document.getElementsByTagName("html")[0];
    html.classList.toggle("js-mobile-menu--is-active");
  }

  openLoginModal() {
    this.authService.openAuthDialog(AuthType.LOGIN);
  }

  openCart() {
    if (this.authService.getToken()) {
      this.router.navigateByUrl("/cart");
    } else {
      this.openLoginModal();
    }
  }
}
