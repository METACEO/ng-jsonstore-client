import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { JsonstoreService } from '../../services/jsonstore.service';
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

  constructor(private _jsonstoreService: JsonstoreService) {
  }

  public usePastedToken(): void {
    if (this.tokenFormControl.value) {
      this.tokenSelected.emit(this.tokenFormControl.value);
    }
  }

  public generateNewToken(): void {
    this._jsonstoreService.getToken()
      .subscribe(token => this.tokenSelected.emit(getTokenUrl(token)));
  }

  public useCachedToken(): void {
    this.tokenSelected.emit(this.cachedToken);
  }

  public unloadToken(): void {
    this.tokenSelected.emit(null);
  }
}
