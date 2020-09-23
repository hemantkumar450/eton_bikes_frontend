import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { Component, Inject, Input, OnInit, PLATFORM_ID } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(DOCUMENT) private document: any,
    private title: Title
  ) {
    // this.title.setTitle('CoFynd - Login');
    // this.authType = AuthType.LOGIN;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const blankSpace: HTMLElement = this.document.getElementById(
        "login-page-space"
      );
      const loginElement: HTMLElement = this.document.getElementById(
        "login-page-block"
      );
      loginElement.setAttribute("style", "display: flex");
      blankSpace.remove();
    }
  }

  openSignUpForm() {
    // this.authType = AuthType.SIGN_UP;
  }
}
