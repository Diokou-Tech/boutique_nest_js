import { Args, Mutation, Resolver, Query} from "@nestjs/graphql";
import { User } from "src/users/dto/user.entity";
import { Iuser } from "src/users/user.interface";
import { AuthService } from "./auth.service";
import { registerInput } from "./dto/register.input";
import { Session } from "./dto/session.type";

@Resolver()
export class AuthResolver{
    constructor(private readonly authService: AuthService){}

    @Mutation(returns => Session)
    register(
        @Args({ name: 'registerInput', type: () =>  registerInput }) registerInput : Iuser
    ): Promise<Session>
    {
        return this.authService.register(registerInput);
    }
    @Query(returns => [User])
    getAll(){
        return this.authService.findAll();
    }

}