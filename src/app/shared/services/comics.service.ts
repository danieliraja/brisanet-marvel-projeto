import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

import { COMICS } from '../urls/url';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) { }

  getOne(): Observable<any> {
    return this.http.get(COMICS).pipe(take(1));
  }


}
