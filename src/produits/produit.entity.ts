import { ObjectType,Field } from "@nestjs/graphql";

@ObjectType()
export class Produit{
    @Field({ description: "the name of product"})
    name: string
    @Field()
    price: number
}