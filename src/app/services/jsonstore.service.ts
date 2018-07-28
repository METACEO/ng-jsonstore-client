import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { IJsonstore, IJsonstoreResponse } from '../interfaces/jsonstore.interface';

@Injectable({
  providedIn: 'root'
})
export class JsonstoreService {

  constructor(private _httpClient: HttpClient,
              private _matSnackBar: MatSnackBar) {
  }

  public getToken(): Observable<string|null> {
    return this._httpClient.get<{token: string}>(`${environment.api}/get-token`)
      .pipe(
        map(response => response.token || null)
      );
  }

  public getStore(endpoint: string): Observable<any|null> {
    const initialStore: IJsonstore = {endpoint, endpoints: []};
    return this.getEndpoint(endpoint)
      .pipe(
        catchError(() => {
          this._matSnackBar.open('An error occurred with this token.', 'Ok');
          return of(null);
        }),
        switchMap(response => response !== null && response.ok === true
          ? response.result === null
            ? this.postEndpoint(endpoint, initialStore)
              .pipe(
                map(() => initialStore)
              )
            : of(response.result)
          : of(null)
        )
      );
  }

  public getEndpoint(endpoint: string): Observable<IJsonstoreResponse> {
    return this._httpClient.get<IJsonstoreResponse>(endpoint);
  }

  public postEndpoint(endpoint: string, data: any): Observable<IJsonstoreResponse> {
    return this._httpClient.post<IJsonstoreResponse>(endpoint, data);
  }

}
