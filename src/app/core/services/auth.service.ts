import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse } from "../model/api-response.model";
import { PageModal } from "../model/page.model";
import { environment } from "src/environments/environment";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { AuthType } from "../enum/auth-type.enum";
import { AuthDialogComponent } from "src/app/shared/components/auth-dialog/auth-dialog.component";

import { isPlatformBrowser } from "@angular/common";
import { AppConstant } from "src/app/shared/constants/app.constant";
import { User } from "../model/user.model";
import { map } from "rxjs/operators";
import { BehaviorSubject, Subject } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  readonly loggedInUser$ = this.loggedInUser.asObservable();
  api: string = environment.apiEndPoint;
  private authModalRef: BsModalRef;
  private successModalRef: BsModalRef;
  // required id for sign up on first time user
  private inflightAuthToken: string;

  authModalConfig = {
    backdrop: true,
    keyboard: false,
    ignoreBackdropClick: true,
    class: "modal-dialog-centered auth-modal",
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private modalService: BsModalService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  signInWithEmailAndPassword(userPayload: User) {
    const path = `${this.api}customer/login`;
    return this.http.post(path, userPayload).pipe(
      map((response: { token: string; user: User }) => {
        this.setTokenInLocalStorage(response.token);
        this.saveUserInLocalStorage(response.user);
        this.closeAuthDialog();
        return response.user;
      })
    );
  }

  signUp(data): Observable<ApiResponse<PageModal>> {
    const path = `${this.api}customer/signup`;
    return this.http.post<ApiResponse<PageModal>>(path, data);
  }

  checkIfUEmailExists(email): Observable<ApiResponse<{ doesExist: boolean }>> {
    const path = `${this.api}customer/emailVerify`;
    return this.http.post<ApiResponse<{ doesExist: boolean }>>(path, email);
  }

  openAuthDialog(authType: AuthType) {
    this.closeSuccessDialog();
    this.authModalRef = this.modalService.show(
      AuthDialogComponent,
      this.authModalConfig
    );
    this.authModalRef.content.authType = authType;
  }

  closeAuthDialog() {
    if (this.authModalRef) {
      this.authModalRef.hide();
    }
  }

  closeSuccessDialog() {
    if (this.successModalRef) {
      this.successModalRef.hide();
    }
  }

  getToken() {
    if (isPlatformBrowser(this.platformId)) {
      const token = JSON.parse(localStorage.getItem(AppConstant.LS_TOKEN_KEY));
      return token ? token : null;
    }
  }

  validateToken(token): Observable<ApiResponse<boolean>> {
    const path = `${this.api}customer/verify`;
    return this.http.post<ApiResponse<boolean>>(path, { token });
  }

  /**
   * @param <token>
   * @description Store user token in local storage for authenticate logged in user
   */
  private setTokenInLocalStorage(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(AppConstant.LS_TOKEN_KEY, JSON.stringify(token));
    }
  }

  /**
   * @param <User>
   * @description Store user in local storage
   */
  private saveUserInLocalStorage(user: User): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loggedInUser.next(user);
      localStorage.setItem(
        AppConstant.LS_PROFILE_STATUS_KEY,
        JSON.stringify(user)
      );
    }
  }

  /**
   * @description clear all local storage at time of logout
   */
  clearLocalStorage() {
    // Reset logged in user
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(AppConstant.LS_TOKEN_KEY);
      localStorage.removeItem(AppConstant.LS_PROFILE_STATUS_KEY);
      this.loggedInUser.next(null);
      // this.router.navigateByUrl("/");
      // location.reload();
    }
  }

  /**
   * @returns temp access_token for user register
   */
  getInFlightAuthToken() {
    return this.inflightAuthToken;
  }
}
