import { Component } from '@angular/core';

import { IEndpoint } from './interfaces/endpoint.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public cachedToken: string;
  public endpoints: IEndpoint[];
  public token: string;

  tokenSelected(token: string): void {
    this.token = token;
  }

}
