import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductslistComponent } from './productslist/productslist.component';
import { OrderslistComponent } from './orderslist/orderslist.component';
import { UserslistComponent } from './userslist/userslist.component';
import { ContactformComponent } from './contactform/contactform.component';
import {WelcomePageComponent} from './welcome-page/welcome-page.component'

const routes: Routes = [
  { path: '', redirectTo: '/welcome-page', pathMatch: 'full' },
  { path: 'productslist', component: ProductslistComponent },
  { path: 'orderslist', component: OrderslistComponent },
  { path :'userslist' , component: UserslistComponent},
  { path : 'contactform', component: ContactformComponent},
  { path: 'welcome-page', component: WelcomePageComponent}

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
