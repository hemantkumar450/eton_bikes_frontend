import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ApiResponse } from "../model/api-response.model";
import { Product, BuildSpecs } from "../model/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductDetail(): Observable<ApiResponse<Product>> {
    return this.http.get<ApiResponse<Product>>(
      `./assets/files/productDetail.json`
    );
  }
  getProductBuilds(): Observable<ApiResponse<BuildSpecs>> {
    return this.http.get<ApiResponse<BuildSpecs>>(
      `./assets/files/productBuildSpecs.json`
    );
  }
}
