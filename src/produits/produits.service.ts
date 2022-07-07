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
        let element = this.produits.find((el)=>el.id == id);
        console.log(element);
        return element;
    }
    deleteOne(id){
        let elementIndex = this.produits.findIndex((el)=> el.id === id);
        console.log(elementIndex);
        if(elementIndex >0 ){
            this.produits.splice(elementIndex,1);
            let result = {"statut" : true,"data" : this.produits};
            return result;
        }else{
            throw new NotFoundException('Element introuvable');
        }
    }
    insertOne(product){
        this.produits.push(product);
        return this.produits;
    }
    updateProduct(id,product)
    {
        let indexElement = this.produits.findIndex((el)=> el.id == id);
        console.log('update',product);
        if(indexElement < 0){
            throw new NotFoundException('produit introuvable');
        }else{
            this.produits[indexElement] =  {...this.produits[indexElement], ...product};
            return this.produits[indexElement];
        }
    }
    searchByName(name){
        let element = this.produits.find((el) => el.name == name);
        console.log(' elemnt ',element, ' name ',name);
        return element;
    }
}
