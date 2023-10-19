import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../home';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent {
  home: Observable<Home> | undefined;

  constructor(private HomeService: HomeService) { }

  ngOnInit(): void {

    this.showProductslist();
  }

  showProductslist() {
    this.home = this.HomeService.getProductslist();
  }
  lsitofproducts(){
    return this.HomeService.getProductslist();
  }
}
