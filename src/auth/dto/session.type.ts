import { ObjectType,Field } from "@nestjs/graphql";
import { User } from "src/users/dto/user.entity";
import { Iuser } from "src/users/user.interface";

@ObjectType()
export class Session{
    @Field(type => User)
    user: Iuser;
    @Field()
    token: string;
}   