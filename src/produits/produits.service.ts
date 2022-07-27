/* eslint-disable prettier/prettier */
import { Injectable,NotFoundException } from '@nestjs/common';
import { produitModelName } from './produit.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Iproduit } from './produit.interface';
@Injectable()
export class ProduitsService {
    constructor(@InjectModel(produitModelName) private model: Model<Iproduit>) {}

    getAll(){
        return this.model.find({}); 
    }
    getOneProduct(id){
        return this.model.findOne({"_id": id});
    }
    deleteOne(id){
        return this.model.deleteOne({"_id": id});
    }
    insertOne(product): Promise<Iproduit>{
        console.log({product});
        return this.model.create(product);
    }
    updateProduct(id,product)
    {
        return this.model.updateOne({"_id": id},{$set : product });
    }
    async searchByName(name){
        const element = await this.model.findOne({ "name" : name });
        return element;
    }
}
