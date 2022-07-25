import { Schema } from 'mongoose';

export const ProduitSchema = new Schema({
    name: {type: String, required: true, unique : true},
    price: {type: Number, required: true},
},{timestamps: true})