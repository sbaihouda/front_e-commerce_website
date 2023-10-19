import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import  { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  product: Observable<Product> | undefined;

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {

    this.showProduct();
  }

  showProduct() {
    this.product = this.productservice.getProduct();
  }

}
