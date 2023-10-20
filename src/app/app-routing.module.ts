import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductslistComponent } from './productslist/productslist.component';
import { OrderslistComponent } from './orderslist/orderslist.component';
import { UserslistComponent } from './userslist/userslist.component';

const routes: Routes = [
  { path: 'productslist', component: ProductslistComponent },
  { path: 'orderslist', component: OrderslistComponent },
  { path :'userslist' , component: UserslistComponent}

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
