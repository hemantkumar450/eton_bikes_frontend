import { Component } from "@angular/core";
import { AuthType } from "src/app/core/enum/auth-type.enum";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  public bike_menu: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  showBikes() {
    this.bike_menu = !this.bike_menu;
  }

  openLoginModal() {
    this.authService.openAuthDialog(AuthType.LOGIN);
  }

}
