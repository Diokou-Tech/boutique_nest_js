import { Schema } from "mongoose";
import { ProduitSchema } from "src/produits/produits.schema";
import { v4 } from 'uuid';

export const reservationSchema = new Schema({
    code: { type: String, required: true,unique: true},
    produit: {type : ProduitSchema, required: true},
    clientId: {type : String,required: true},
    transaction:  { type: String, default: v4 }
});