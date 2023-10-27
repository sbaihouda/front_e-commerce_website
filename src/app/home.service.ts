import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productslist, books, devices, orderslist, userslist } from './home';
import { Observable, map } from 'rxjs';
import { ProductslistComponent } from './productslist/productslist.component';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  [x: string]: any;

  apiUrl = 'assets/productslist.json';
  apiUrl2= 'assets/ordersList.json';
  usersapiUrl = 'assets/userslist.json';
  apiUrlbooks = 'assets/books.json';
  apiUrldevices = 'assets/devices.json'


  constructor(private http: HttpClient) { }

  getProductslist() :Observable<productslist> {
    return this.http.get<productslist>(this.apiUrl);
  }
  getOrderslist():Observable<orderslist> {
    return this.http.get<orderslist>(this.apiUrl2)
  }
  getUserslist():Observable<userslist> {
    return this.http.get<userslist>(this.usersapiUrl)
  }
  getBooks():Observable<books> {
    return this.http.get<books>(this.apiUrlbooks)
  }
  getDevices():Observable<devices> {
    return this.http.get<devices>(this.apiUrldevices)
  }
  
}