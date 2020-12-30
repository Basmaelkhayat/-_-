import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MerchantService {
  constructor(private http: HttpClient) {}
  getMerchant(id: string) {
    return this.http.get(`merchants/${id}`);
  }
  getMerchantPunches(id: string) {
    return this.http.get(`merchants/${id}/punches`);
  }
  getTopRedeemedRewards(id: string) {
    return this.http.get(`merchants/${id}/top-redeemed`);
  }
  getSales(id: string) {
    return this.http.get(`merchants/${id}/sales`);
  }
}
