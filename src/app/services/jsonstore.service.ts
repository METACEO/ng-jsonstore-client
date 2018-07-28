import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JsonstoreService {

  constructor(private _httpClient: HttpClient) {
  }

  public getToken(): Observable<string|null> {
    return this._httpClient.get<{token: string}>(`${environment.api}/get-token`)
      .pipe(
        map(response => response.token || null)
      );
  }

}
