import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/mock/products.json')
  }
}
