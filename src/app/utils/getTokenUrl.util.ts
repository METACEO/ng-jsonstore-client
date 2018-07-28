import {environment} from '../../environments/environment';

export function getTokenUrl(token: string) {
  return token ? `${environment.api}/${token}` : '';
}
