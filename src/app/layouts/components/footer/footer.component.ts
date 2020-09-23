import { Router } from "@angular/router";
import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  constructor(private router: Router) {}

  openList(latitude: number, longitude: number) {
    this.router.navigateByUrl(
      `/coworking?latitude=${latitude}&longitude=${longitude}`
    );
  }
}
