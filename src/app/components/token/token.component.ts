import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { getTokenUrl } from '../../utils/getTokenUrl.util';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent {

  @Input() cachedToken: string;
  @Input() token: string;
  @Output() tokenSelected: EventEmitter<string> = new EventEmitter<string>();

  tokenFormControl: FormControl = new FormControl('');

  constructor(private _httpClient: HttpClient) {
  }

  public usePastedToken(): void {
    if (this.tokenFormControl.value) {
      this.tokenSelected.emit(this.tokenFormControl.value);
    }
  }

  public generateNewToken(): void {
    this._httpClient.get<{token: string}>(`${environment.api}/get-token`)
      .pipe(
        filter(response => response.token !== undefined),
        map(response => response.token)
      )
      .subscribe(token => this.tokenSelected.emit(getTokenUrl(token)));
  }

  public useCachedToken(): void {
    this.tokenSelected.emit(this.cachedToken);
  }

  public unloadToken(): void {
    this.tokenSelected.emit(null);
  }
}
