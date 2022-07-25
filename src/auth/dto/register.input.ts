import { Field, InputType } from "@nestjs/graphql";
import { userRole } from "src/users/enums/user-role.enum";

@InputType()
export class registerInput{
    @Field()
    username: string;
    @Field()
    password: string;
    @Field(type => userRole)
    role: userRole;
}