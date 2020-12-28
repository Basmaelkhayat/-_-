import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MerchantService {
  constructor(private http: HttpClient) {}
  getMerchant(id: string) {
    return this.http.get(`https://api.mocki.io/v1/e53696fc/merchants/${id}`);
  }
}
