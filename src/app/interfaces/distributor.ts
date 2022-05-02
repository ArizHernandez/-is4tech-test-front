export interface Distributor {
  id: number;
  code: string;
  name: string;
  email_notificate: string;
  email_alert: string;
}

export interface DistributorsResponse {
  message: string;
  data: Distributor[];
}

export interface DistributorResponse {
  message: string;
  data: Distributor;
}

export interface DistributorBody {
  code: string;
  name: string;
  email_notificate: string;
  email_alert: string;
}
