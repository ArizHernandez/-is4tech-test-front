import { Distributor } from './distributor';

export interface AuthorizatedChannel {
  id: number;
  name: string;
  code: string;
  distributor_id: number;
  distributor: Distributor;
}

export interface AuthorizatedChannelsResponse {
  message: string;
  data: AuthorizatedChannel[];
}

export interface AuthorizatedChannelResponse {
  message: string;
  data: AuthorizatedChannel;
}

export interface AuthorizatedChannelBody {
  name: string;
  code: string;
  distributor_id: number;
}
