import { Schema } from 'mongoose';
import { userRole } from './enums/user-role.enum';

export const userSchema = new Schema({
    username : { type: String, unique : true, required : true},
    password : { type: String,required: true},
    role : { type: String ,enum: Object.values(userRole) , required: true}
},{ timestamps : true })
