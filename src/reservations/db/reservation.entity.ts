import { ObjectType,Field } from "@nestjs/graphql";
import { GqlUuid } from "graphql/uuid.scalar";
import { Produit } from "src/produits/produit.entity";
import { ProduitSchema } from "src/produits/produits.schema";


@ObjectType()
export class Reservation{
    @Field({ description: "the name of product"})
    code: string
    @Field()
    produit: Produit
    @Field()
    clientId: string
    @Field(type => GqlUuid, { nullable: true })
    transaction : string
}