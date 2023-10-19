import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { UserslistComponent } from './userslist/userslist.component';
import { OrderslistComponent } from './orderslist/orderslist.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductslistComponent,
    UserslistComponent,
    OrderslistComponent,
    ContactformComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
