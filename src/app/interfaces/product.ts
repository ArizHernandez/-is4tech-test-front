import { Distributor } from './distributor';

export interface Product {
  id: number;
  amount: number;
  code: string;
  description?: string;
  distributor_id: number;
  distributor: Distributor;
}

export interface ProductsResponse {
  message: string;
  data: Product[];
}

export interface ProductResponse {
  message: string;
  data: Product;
}

export interface ProductBody {
  amount: number;
  code: string;
  description?: string;
  distributor_id: number;
}
