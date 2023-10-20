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
  home2 : Observable<orderslist> |undefined
  constructor( private HomeService: HomeService){}

  ngOnInit() : void {
    this.showOrderslist();
  }
  showOrderslist(){
    this.home2= this.HomeService.getOrderslist();
  }
  
}
