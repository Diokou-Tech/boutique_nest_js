import { ObjectType,Field } from "@nestjs/graphql";

@ObjectType()
export class Produit{
    @Field()
    name: string
    @Field()
    price: number
}