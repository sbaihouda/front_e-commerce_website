import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { UserslistComponent } from './userslist/userslist.component';
import { OrderslistComponent } from './orderslist/orderslist.component';
import { ContactformComponent } from './contactform/contactform.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductslistComponent,
    UserslistComponent,
    OrderslistComponent,
    ContactformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
