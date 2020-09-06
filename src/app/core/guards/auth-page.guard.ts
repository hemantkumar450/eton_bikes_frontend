import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AuthPageGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {}
  /**
   * @description Redirect to account if user already logged in!
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.getToken()) {
      this.router.navigate(['/']);
      this.toastrService.success(
        'Looks like you are already logged in. If you want to login from another account, please logout and login again'
      );
      return false;
    } else {
      return true;
    }
  }
}
