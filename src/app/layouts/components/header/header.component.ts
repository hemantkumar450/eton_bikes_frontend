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
  user_name = "";
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.loggedInUser$.subscribe((data) => {
      if (data) {
        this.user_name = data.name;
      } else {
        this.user_name = "";
      }
    });
  }
  logout() {
    this.authService.clearLocalStorage();
    // this.router.navigateByUrl('/');
  }

  showBikes() {
    this.bike_menu = !this.bike_menu;
  }

  toggleMobileNav() {
    const html = document.getElementsByTagName("html")[0];
    html.classList.remove("js-mobile-menu--is-active");
  }
  
  handleToggleCondition(data) {
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
