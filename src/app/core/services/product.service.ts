import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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

  getProducts(): Observable<
    ApiResponse<{ products: Product[]; totalRecords: number }>
  > {
    const path = `${this.api}customer/products`;
    return this.http.get<
      ApiResponse<{ products: Product[]; totalRecords: number }>
    >(path);
  }

  getProductBuilds(): Observable<ApiResponse<BuildSpecs>> {
    return this.http.get<ApiResponse<BuildSpecs>>(
      `./assets/files/productBuildSpecs.json`
    );
  }

  addToCart(
    params
  ): Observable<ApiResponse<{ products: Product[]; totalRecords: number }>> {
    const path = `${this.api}customer/cart`;
    return this.http.post<
      ApiResponse<{ products: Product[]; totalRecords: number }>
    >(path, params);
  }

  getCartDetails(): Observable<
    ApiResponse<{ products: Product[]; totalRecords: number }>
  > {
    const path = `${this.api}customer/cart`;
    return this.http.get<
      ApiResponse<{ products: Product[]; totalRecords: number }>
    >(path);
  }
}
