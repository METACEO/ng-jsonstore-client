import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter, map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { IEndpoint } from './interfaces/endpoint.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public endpoints: IEndpoint[];
  public token: string;

  constructor(private _httpClient: HttpClient) {
    this._httpClient.get<{token: string}>(`${environment.api}/get-token`)
      .pipe(
        filter(response => response.token !== undefined),
        map(response => response.token)
      )
      .subscribe(token => this.token = token);
  }

}
