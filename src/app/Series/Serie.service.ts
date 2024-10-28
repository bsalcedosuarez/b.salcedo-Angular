import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Serie } from './Serie';
import { SERIES_DATA } from './data';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor() { }

  getSeries(): Observable<Serie[]> {
    return of(SERIES_DATA);
  }
}
