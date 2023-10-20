import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { UserslistComponent } from './userslist/userslist.component';
import { OrderslistComponent } from './orderslist/orderslist.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ProductComponent } from './product/product.component';
import { BooksComponent } from './books/books.component';
import { DevicesComponent } from './devices/devices.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductslistComponent,
    UserslistComponent,
    OrderslistComponent,
    ContactformComponent,
    ProductComponent,
    BooksComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
