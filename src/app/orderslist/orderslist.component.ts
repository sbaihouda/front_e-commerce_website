import { Component, ElementRef, ViewChild } from '@angular/core';
import { HomeService } from '../home.service';
import { Observable } from 'rxjs';
import { orderslist } from '../home';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-orderslist',
  templateUrl: './orderslist.component.html',
  styleUrls: ['./orderslist.component.css']
})
export class OrderslistComponent {
  orderslist : Observable<orderslist> |undefined
  ordersData:any
  // Reference the modal element
  @ViewChild('myModal') myModal: ElementRef | undefined;
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

  openModal(orderId: number) {
    const modalId = `myModal${orderId}`;
    const modalElement = document.getElementById(modalId);
    // Use ElementRef and Bootstrap modal methods to show the modal
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  

  
  
}
