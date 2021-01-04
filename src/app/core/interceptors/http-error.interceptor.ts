import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { AuthType } from "../enum/auth-type.enum";
import { AuthService } from "../services/auth.service";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    // private loaderService: LoaderService,
    public toasterService: ToastrService,
    private authService: AuthService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          if (evt.body && evt.body.success) {
            this.toasterService.success(evt.body, evt.body.message);
            // this.loaderService.isLoading.next({
            //   loading: false
            // });
          }
        }
      }),
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          try {
            if (error.status === 401) {
              // this.authService.openAuthDialog(AuthType.LOGIN);
              this.authService.clearLocalStorage();
            } else {
              this.toasterService.error(error.error.message, error.error.type);
              // this.loaderService.isLoading.next({
              //   loading: false
              // });
            }
          } catch (e) {
            this.toasterService.error(
              "An error occurred",
              "Something wen Wrong"
            );
          }
        }
        throw error;
      })
    );
  }
}
