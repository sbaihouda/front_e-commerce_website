import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Home, Home2 } from './home';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiUrl = 'assets/productslist.json';
  apiUrl2= 'assets/ordersList.json'

  constructor(private http: HttpClient) { }

  getProductslist() :Observable<Home> {
    return this.http.get<Home>(this.apiUrl);
  }
  getOrderslist():Observable<Home2> {
    return this.http.get<Home2>(this.apiUrl2)
  }
}