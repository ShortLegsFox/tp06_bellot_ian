import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Product} from "../../shared/models/product";
import { DelProduct } from "../../shared/action/product-acion";
import { ClearCart } from "../../shared/action/product-acion";
import { ProductsStates } from "../../shared/states/products-states";
import { Observable } from "rxjs";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  constructor(private store: Store) { }

  @Select(ProductsStates.getListProducts) liste$: Observable<Product[]>;
  ngOnInit() { }

  delProduct(p: Product): void {
    this.store.dispatch(new DelProduct(p));
  }

  clearCart() : void {
    this.store.dispatch(new ClearCart());
  }
}
