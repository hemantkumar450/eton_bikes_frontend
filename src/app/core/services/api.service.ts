import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  contactUs(contactInfo: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) {
    return this.http.post(`${environment.apiEndPoint}/contactUs`, contactInfo);
  }
}
