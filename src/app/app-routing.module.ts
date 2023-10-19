import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductslistComponent } from './productslist/productslist.component';
import { OrderslistComponent } from './orderslist/orderslist.component';

const routes: Routes = [
  { path: 'productslist', component: ProductslistComponent },
  { path: 'orderslist', component: OrderslistComponent },

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
