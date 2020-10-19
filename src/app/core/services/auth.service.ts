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

@Injectable({
  providedIn: "root",
})
export class AuthService {
  api: string = environment.apiEndPoint;
  private authModalRef: BsModalRef;
  private successModalRef: BsModalRef;

  authModalConfig = {
    backdrop: true,
    keyboard: false,
    ignoreBackdropClick: true,
    class: "modal-dialog-centered auth-modal",
  };

  constructor(
    private http: HttpClient,
    private modalService: BsModalService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  signInWithEmailAndPassword(
    pageType: any
  ): Observable<ApiResponse<PageModal>> {
    // return this.http.get<ApiResponse<PageModal>>(
    //   `./assets/files/home-page.json`
    // );
    const path = `${this.api}customer/pages/${pageType}`;
    return this.http.get<ApiResponse<PageModal>>(path);
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
}
