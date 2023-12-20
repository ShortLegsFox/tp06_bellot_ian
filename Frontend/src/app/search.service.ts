import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, of, from } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  tap,
  switchMap,
} from 'rxjs/operators';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    if (term === '') {
      return of([]);
    }

    return this.http.get(
      `https://ibellot-cnam-app.onrender.com/api/catalogue/${term}`
    )
  }
}
