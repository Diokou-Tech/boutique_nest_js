import { Field, ObjectType } from "@nestjs/graphql";
@ObjectType()
export class Client {
    @Field()
    name: string;
    @Field()
    prenom : string;
    @Field()
    company: string; 
}
