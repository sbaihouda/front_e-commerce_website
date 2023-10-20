import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Home, orderslist, userslist } from './home';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiUrl = 'assets/productslist.json';
  apiUrl2= 'assets/ordersList.json';
  usersapiUrl = 'assets/userslist.json'

  constructor(private http: HttpClient) { }

  getProductslist() :Observable<Home> {
    return this.http.get<Home>(this.apiUrl);
  }
  getOrderslist():Observable<orderslist> {
    return this.http.get<orderslist>(this.apiUrl2)
  }
  getUserslist():Observable<userslist> {
    return this.http.get<userslist>(this.usersapiUrl)
  }
}