import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthType } from "src/app/core/enum/auth-type.enum";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-validate",
  templateUrl: "./validate.component.html",
  styleUrls: ["./validate.component.scss"],
})
export class ValidateComponent implements OnInit {
  token: string;
  isValid: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private authService: AuthService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.token = params["token"];
    });
  }

  ngOnInit(): void {
    this.validateToken();
  }

  validateToken() {
    this.authService.validateToken(this.token).subscribe(
      () => {
        this.isValid = true;
        this.openLogin();
      },
      (error) => {
        this.isValid = false;
        this.openLogin();
        this.toastrService.error("email is not verified");
        // this.router.navigateByUrl("/");
      }
    );
  }

  openLogin() {
    setTimeout(() => {
      this.router.navigateByUrl("/");
      this.authService.openAuthDialog(AuthType.LOGIN);
    }, 5000);
  }
}
