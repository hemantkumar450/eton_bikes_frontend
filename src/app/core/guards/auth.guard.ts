import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthType } from "../enum/auth-type.enum";
import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.getToken()) {
      return true;
    }

    this.router.navigate(["/"], {
      queryParams: { returnUrl: state.url },
      replaceUrl: true,
    });

    this.authService.openAuthDialog(AuthType.LOGIN);

    return false;
  }
}
