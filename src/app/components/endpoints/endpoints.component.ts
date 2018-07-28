import { Component, Input } from '@angular/core';

import { IEndpoint } from '../../interfaces/endpoint.interface';

@Component({
  selector: 'app-endpoints',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss']
})
export class EndpointsComponent {

  @Input() endpoints: IEndpoint[];

  public get loadingEndpoints(): boolean {
    return this.endpoints === null || this.endpoints === undefined;
  }

}
