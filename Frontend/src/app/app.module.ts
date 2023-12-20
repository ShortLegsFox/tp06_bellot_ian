import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule} from "@ngxs/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './product-list/products/products.component';
import {ProductListModule} from "./product-list/product-list.module";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsStates } from "../shared/states/products-states";
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApiService } from "./api.service";
import { ApiHttpInterceptor } from "./http-interceptor";
import {SearchService} from "./search.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    LandingComponent,
    NavbarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductListModule,
    NgxsModule.forRoot([ProductsStates]),
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiHttpInterceptor, multi: true },
    ApiService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
