import { Document } from "mongoose"
import { Produit } from "src/produits/produit.entity"

export interface Ireservation extends Document {
    code: String;
    produit: Produit;
    cclientId: String;

}