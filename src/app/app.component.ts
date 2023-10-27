import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { orderslist, userslist, productslist} from './home';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet';
  userslist: Observable<userslist> | undefined;
  home2 : Observable<orderslist> |undefined
  productsList : Observable<productslist> | undefined;
  jsonData:any


  constructor(private HomeService : HomeService){}

  ngOnInit(){
    this.showUserslist();
    this.showOrderslist();
    this.showProductslist();
    this.HomeService.getProductslist().subscribe((data: any) => {
      this.jsonData = data; // Stockez les données dans la variable jsonData
    });

  }

  showUserslist(){
    this.userslist=this.HomeService.getUserslist()
    
  }
  showOrderslist(){
    this.home2= this.HomeService.getOrderslist();
  }
  showProductslist() {
    this.productsList = this.HomeService.getProductslist();
  }
}
