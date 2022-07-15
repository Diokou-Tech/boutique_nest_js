/* eslint-disable prettier/prettier */
import { Injectable,NotFoundException } from '@nestjs/common';

@Injectable()
export class ProduitsService {
    private produits =[
        {id:1,name: "orange",price:8000},
        {id:2,name: "bic",price:5000},
        {id:3,name: "orange",price:800},
        {id:4,name: "coton",price:1200},
    ]
    getAll(){
        return this.produits;
    }
    getOneProduct(id){
        const element = this.produits.find((el)=>el.id == id);
        console.log(element);
        return element;
    }
    deleteOne(id){
        console.log(id);
        const elementIndex = this.produits.findIndex((el)=> el.id == id);
        console.log(elementIndex);
        if(elementIndex >= 0 ){
            this.produits.splice(elementIndex,1);
            const result = {"statut" : true,"data" : this.produits};
            return result;
        }else{
            throw new NotFoundException('Element introuvable');
        }
    }
    insertOne(product){
        this.produits.push(product);
        return product;
    }
    updateProduct(id,product)
    {
        const indexElement = this.produits.findIndex((el) => el.id == id);
        console.log('update',product,'id',id);

        if(indexElement < 0){
            throw new NotFoundException('produit introuvable');
        }else{
            this.produits[indexElement] =  {...this.produits[indexElement], ...product};
            return this.produits[indexElement];
        }
    }
    searchByName(name){
        const element = this.produits.find((el) => el.name == name);
        console.log(' elemnt ',element, ' name ',name);
        return element;
    }
}
