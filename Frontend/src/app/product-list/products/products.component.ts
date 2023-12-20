import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListService } from "../product-list.service";
import { Product } from "../../../shared/models/product"
import {AddProduct} from "../../../shared/action/product-acion";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductListService]
})
export class ProductsComponent implements OnInit{
  search: string = '';
  products$: Observable<Product[]>;

  constructor(private productListService: ProductListService, private store: Store) {
    this.products$ = this.productListService.getProducts();
  }

  ngOnInit() { }
  addToCart(product : Product) {
    console.log(product);
    this.store.dispatch(new AddProduct(product));
  }
}
