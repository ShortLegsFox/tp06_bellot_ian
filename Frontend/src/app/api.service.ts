import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { Client } from "../shared/models/client";
import { Product} from "../shared/models/product";
import { environment } from "../shared/Environment/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public loginClient(login: string, password: string): Observable<Client> {
    let data: String;
    let httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    data = 'login=' + login + '&password=' + password;
    return this.http.post<Client>(
        environment.backendLoginClient,
        data,
        httpOptions
    );
  }

  public getCatalogue(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendCatalogue);
  }
}
