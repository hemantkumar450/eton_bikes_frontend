import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { AuthType } from '@core/enum/auth-type.enum';
import { SuccessModal } from '@core/enum/success-modal.enum';
import { ApiResponse } from '@core/model/api-response.model';
import { User } from '@core/model/user.model';
import { environment } from '@env/environment';
import { AuthDialogComponent } from '@shared/components/auth-dialog/auth-dialog.component';
import { SuccessDialogComponent } from '@shared/components/success-dialog/success-dialog.component';
import { AppConstant } from '@shared/constants/app.constant';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  readonly loggedInUser$ = this.loggedInUser.asObservable();
  dialogConfirmation$ = new Subject<boolean>();
  private authModalRef: BsModalRef;
  private successModalRef: BsModalRef;

  authModalConfig = {
    backdrop: true,
    keyboard: false,
    ignoreBackdropClick: true,
    class: 'modal-dialog-centered auth-modal'
  };

  successModalConfig = {
    backdrop: true,
    keyboard: false,
    ignoreBackdropClick: true,
    class: 'modal-dialog-centered success-modal'
  };

  // required id for sign up on first time user
  private inflightAuthToken: string;

  // Send Return URL from components
  private loginRedirectUrl: string;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private http: HttpClient,
    private router: Router,
    private modalService: BsModalService
  ) {}

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

  /**
   * @param — <token>
   * @description — Store user token in local storage for authenticate logged in user
   */

  signInWithEmailAndPassword(userPayload: User) {
    return this.http.post(`${environment.apiEndPoint}/login`, userPayload).pipe(
      map((response: { token: string; user: User }) => {
        this.setTokenInLocalStorage(response.token);
        this.saveUserInLocalStorage(response.user);
        this.closeAuthDialog();
        return response.user;
      })
    );
  }

  signUp(userPayload: User) {
    const payload = userPayload;
    return this.http
      .post<ApiResponse<User>>(`${environment.apiEndPoint}/register`, payload)
      .pipe(
        map((response: ApiResponse<User>) => {
          this.closeAuthDialog();
          this.openSuccessDialog(SuccessModal.REGISTER_SUCCESS);
          return response.data;
        })
      );
  }

  signUpWithoutPassword(userPayload: User) {
    const payload = userPayload;
    return this.http
      .post<ApiResponse<User>>(`${environment.apiEndPoint}/register`, payload)
      .pipe(
        map((response: ApiResponse<User>) => {
          this.inflightAuthToken = response.token;
          this.closeAuthDialog();
          return response;
        })
      );
  }

  /**
   * @returns token
   */
  getToken() {
    if (isPlatformBrowser(this.platformId)) {
      const token = JSON.parse(localStorage.getItem(AppConstant.LS_TOKEN_KEY));
      return token ? token : null;
    }
  }

  /**
   * @returns User
   */
  getLoggedInUser() {
    const user: User = JSON.parse(
      localStorage.getItem(AppConstant.LS_PROFILE_STATUS_KEY)
    );
    return user ? user : null;
  }

  setLoginRedirectUrl(url: string) {
    this.loginRedirectUrl = url;
  }

  getLoginRedirectUrl() {
    return this.loginRedirectUrl;
  }

  /**
   * @required `access_token`
   */
  logOut() {
    this.clearLocalStorage();
    // TODO: API REFRESH TOKEN
    // this.http.get('/user/logout').subscribe(() => {
    //   this.clearLocalStorage();
    // });
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
   * @returns User
   */
  public get currentUserDetail(): User {
    return this.loggedInUser.value;
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
      this.router.navigateByUrl('/');
      // location.reload();
    }
  }

  // Verify Email
  verifyEmail(token: string) {
    return this.http.post<any>(`${environment.apiEndPoint}/verifyEmail`, {
      token
    });
  }

  // Verify Email
  checkIfUEmailExists(email: string) {
    return this.http.post<any>(`${environment.apiEndPoint}/checkEmail`, {
      email
    });
  }

  // Success Dialog
  openSuccessDialog(successModalType: SuccessModal) {
    this.successModalRef = this.modalService.show(
      SuccessDialogComponent,
      this.successModalConfig
    );
    this.successModalRef.content.activeModalType = successModalType;
  }

  closeSuccessDialog() {
    if (this.successModalRef) {
      this.successModalRef.hide();
    }
  }

  /**
   * @returns temp access_token for user register
   */
  getInFlightAuthToken() {
    return this.inflightAuthToken;
  }

  /**
   * clear temp access_token for user register on modal close
   */
  clearInFlightAuthToken() {
    this.inflightAuthToken = null;
  }

  getChangePasswordLink(email: string) {
    return this.http.post<{ email: string }>(
      `${environment.apiEndPoint}/forgetPassword`,
      email
    );
  }

  resetPassword(token: string, newPassword: string) {
    return this.http.post<{ token: string; newPassword: string }>(
      `${environment.apiEndPoint}/updateForgetPassword`,
      { token, newPassword }
    );
  }
}
