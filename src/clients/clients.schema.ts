import { Schema } from "mongoose";

export const clientSchema = new Schema({
    name: {type: String, required: true},
    prenom: {type: String, required: true},
    company: {type: String, required: true},
},{ timestamps : true })