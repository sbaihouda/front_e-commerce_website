import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'assets/product.json';

  constructor(private http: HttpClient) { }

  getProduct() :Observable<Product> {
    return this.http.get<Product>(this.apiUrl);
  }
}