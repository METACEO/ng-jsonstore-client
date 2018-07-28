import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { filter, map } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public token: string;

  constructor(private _httpClient: HttpClient) {
    this._httpClient.get<{token: string}>(`${environment}/get-token`)
      .pipe(
        filter(response => response.token !== undefined),
        map(response => response.token)
      )
      .subscribe(token => this.token = token);
  }

}
