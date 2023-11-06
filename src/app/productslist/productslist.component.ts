import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { productslist } from '../home';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent {
  productslist: Observable<productslist> | undefined;
  jsonData:any

  constructor(private HomeService: HomeService) { }

  ngOnInit(): void {

    this.showProductslist();
    this.HomeService.getProductslist().subscribe((data: any) => {
      this.jsonData = data; // Stockez les données dans la variable jsonData
    });
    
  }


  showProductslist() {
    this.productslist = this.HomeService.getProductslist();
  }
}
