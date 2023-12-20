import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from "./products/products.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [ProductsComponent, FilterPipe],
  exports: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ProductListModule { }
