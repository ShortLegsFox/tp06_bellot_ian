import { Component } from '@angular/core';
import { ApiService } from "../api.service";
import { Product } from "../../shared/models/product";
import { Observable } from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: string = '';
  password: string = '';
  nom: string = '';
  prenom: string = '';
  cnx: boolean = false;
  produits$: Observable<Array<Product>>;
  constructor(private apiService: ApiService) {
        this.produits$ = this.apiService.getCatalogue();
    }
  connexion() {
    this.apiService.loginClient(this.login, this.password).subscribe((c) => {
      this.nom = c.nom;
      this.prenom = c.prenom;
      this.cnx = true;
    });
  }

}
