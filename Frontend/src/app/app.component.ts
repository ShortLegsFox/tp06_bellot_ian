import { Component, Injectable, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent, of } from 'rxjs';
import {
  map,
  distinctUntilChanged,
  debounceTime,
  tap,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP6';

  model: Observable<any>;
  searchField$: Observable<any>;
  @ViewChild('input', { static: true }) input: ElementRef;

  constructor(private _service: SearchService) {}

  ngAfterViewInit() {
    this.searchField$ = fromEvent(this.input.nativeElement, `keyup`);
    this.model = this.searchField$.pipe(
      map((event) => event.target.value),
      debounceTime(300),
      distinctUntilChanged(),

      switchMap((term) =>
        this._service.search(term).pipe(
          catchError(() => {
            return of([]);
          })
        )
      )
    );
  }
}
