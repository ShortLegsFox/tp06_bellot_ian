import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import {LandingComponent} from "./landing/landing.component";
import {ProductsComponent} from "./product-list/products/products.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path:'', component:LandingComponent },
  { path:'panier', component:ShoppingCartComponent },
  { path:'catalogue', component:ProductsComponent },
  { path:'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
