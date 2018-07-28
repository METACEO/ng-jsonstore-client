import {IEndpoint} from './endpoint.interface';

export interface IJsonstore {
  endpoint: string;
  endpoints: IEndpoint[];
}

export interface IJsonstoreResponse {
  ok: boolean;
  result: any;
}
