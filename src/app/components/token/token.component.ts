import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent {

  @Input() cachedToken: string;
  @Input() token: string;

  public get hasCachedToken(): boolean {
    return typeof this.cachedToken !== null && this.cachedToken !== undefined;
  }

  public enterToken(): void {
    //
  }

  public newToken(): void {
    //
  }

  public useCached(): void {
    //
  }
}
