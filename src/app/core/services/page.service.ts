import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse } from "../model/api-response.model";
import { PageModal } from "../model/page.model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class PageService {
  api:string = environment.apiEndPoint;
  constructor(private http: HttpClient) {

  }

  getPageByType(pageType = 'home'): Observable<ApiResponse<PageModal>> {
    // return this.http.get<ApiResponse<PageModal>>(
    //   `./assets/files/home-page.json`
    // );
    const path = `${this.api}customer/pages/${pageType}`;
    return this.http.get<ApiResponse<PageModal>>(
      path
    );
  }
  
}
