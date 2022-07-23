import { Args,Resolver,Query } from "@nestjs/graphql";
import { Produit } from "./produit.entity";
import { ProduitsService } from "./produits.service";

@Resolver()
export class ProductResolver{
    constructor(private readonly pService: ProduitsService) {}

    @Query(returns => [Produit],{ nullable: true })
    fetchProduits(){
        return this.pService.getAll();
    }
    @Query(returns => Produit,{nullable: true})
    fetchProduit(
        @Args({ name: 'id', type: () => String }) id: string
        )
        {
        return this.pService.getOneProduct(id);
        }
}