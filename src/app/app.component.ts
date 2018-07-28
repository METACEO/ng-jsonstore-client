import { Component } from '@angular/core';

import { IEndpoint } from './interfaces/endpoint.interface';
import { IJsonstore } from './interfaces/jsonstore.interface';
import { JsonstoreService } from './services/jsonstore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public cachedToken: string;
  public endpoints: IEndpoint[];
  public token: string;

  constructor(private _jsonstoreService: JsonstoreService) {
  }

  tokenSelected(token: string): void {
    this.token = token;
    if (!this.token) {
      this.endpoints = null;
      return;
    }
    this._jsonstoreService.getStore(token)
      .subscribe((jsonstore: IJsonstore) => {
        if (jsonstore) {
          this.endpoints = jsonstore.endpoints || [];
        } else {
          this.endpoints = null;
          this.token = null;
        }
      });
  }

}
