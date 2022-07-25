import { Document } from 'mongoose'; 

export interface Iproduit extends Document {
  name: string;
  price: number;
}
