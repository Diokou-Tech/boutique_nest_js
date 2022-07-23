import { Resolver,Query } from "@nestjs/graphql";
import { Produit } from "./produit.entity";
@Resolver()
export class ProductResolver{
    @Query(returns => [Produit],{ nullable: true })
    fetchProduits(){
        return "Diokou Teck in graphql";
    }
}