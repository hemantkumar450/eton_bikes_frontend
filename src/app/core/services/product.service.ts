import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ApiResponse } from "../model/api-response.model";
import { Product, BuildSpecs, Products } from "../model/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  api: string = environment.apiEndPoint;
  constructor(private http: HttpClient) {}

  getProductDetail(product: string): Observable<ApiResponse<Product>> {
    const path = `${this.api}customer/products/${product}`;
    return this.http.get<ApiResponse<Product>>(path);
  }
  getProducts(): Observable<ApiResponse<{ products: Product[] }>> {
    const path = `${this.api}customer/products`;
    return this.http.get<ApiResponse<{ products: Product[] }>>(path);
  }
  getProductBuilds(): Observable<ApiResponse<BuildSpecs>> {
    return this.http.get<ApiResponse<BuildSpecs>>(
      `./assets/files/productBuildSpecs.json`
    );
  }
}
