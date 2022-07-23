import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User{
    @Field({description : 'username for user ',nullable : false})
    username: String;
    @Field()
    password: String;
}