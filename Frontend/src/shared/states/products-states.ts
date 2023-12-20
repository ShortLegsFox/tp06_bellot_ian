import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';

import { AddProduct, DelProduct, ClearCart } from "../action/product-acion";
import { ProductStateModel } from "./product-state-model";
import { Product } from "../models/product";

@State<ProductStateModel>({
  name: 'products',
  defaults: {
    products: [],
  },
})

@Injectable()
export class ProductsStates {
  @Selector()
  static getNbProducts(state: ProductStateModel) {
    return state.products.length;
  }

  @Selector()
  static getListProducts(state: ProductStateModel) {
    return state.products;
  }

  @Action(AddProduct)
  add(
    {getState, patchState } : StateContext<ProductStateModel>,
    { payload } : AddProduct
  ) {
    const state = getState();
    patchState({
      products: [...state.products, payload]
    });
  }

  @Action(DelProduct)
  del(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: DelProduct
  ) {
    const state = getState();
    patchState({
      products: state.products.filter(
        (x) => !(payload.ref == x.ref)
      ),
    });
  }

  @Action(ClearCart)
  clear(
    { patchState }: StateContext<ProductStateModel>,
  ) {
    patchState ({
      products: []
    });
  }
}
