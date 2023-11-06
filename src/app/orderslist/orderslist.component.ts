import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { Observable } from 'rxjs';
import { orderslist } from '../home';

@Component({
  selector: 'app-orderslist',
  templateUrl: './orderslist.component.html',
  styleUrls: ['./orderslist.component.css']
})
export class OrderslistComponent {
  orderslist : Observable<orderslist> |undefined
  ordersData:any
  constructor( private HomeService: HomeService){}

  ngOnInit() : void {
    this.showOrderslist();
    this.HomeService.getOrderslist().subscribe((data: any) => {
      this.ordersData = data; // Stockez les données dans la variable jsonData
    });
  }
  showOrderslist(){
    this.orderslist= this.HomeService.getOrderslist();
  }

  function(){
    alert("lol");
    };
  

  
  
}
