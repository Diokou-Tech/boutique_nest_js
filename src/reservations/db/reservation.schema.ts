import { Schema } from "mongoose";
import { ProduitSchema } from "src/produits/produits.schema";
export const reservationSchema = new Schema({
    code: { type: String, required: true,unique: true},
    produit: {type : ProduitSchema, required: true},
    clientId: {type : String,required: true}
});