import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private AUTH_HEADER = "Authorization";

  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authService = this.injector.get(AuthService);

    if (authService.getToken()) {
      request = request.clone({
        headers: request.headers.set(
          this.AUTH_HEADER,
          `Bearer ${authService.getToken()}`
        ),
      });
    }

    // For Subscription we need token
    if (authService.getInFlightAuthToken()) {
      request = request.clone({
        headers: request.headers.set(
          this.AUTH_HEADER,
          authService.getInFlightAuthToken()
        ),
      });
    }

    return next.handle(request);
  }
}
