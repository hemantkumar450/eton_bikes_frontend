import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse } from "../model/api-response.model";
import { PageModal } from "../model/page.model";

@Injectable({
  providedIn: "root",
})
export class PageService {
  constructor(private http: HttpClient) {}

  getPageByType(): Observable<ApiResponse<PageModal>> {
    return this.http.get<ApiResponse<PageModal>>(
      `./assets/files/home-page.json`
    );
  }
}
