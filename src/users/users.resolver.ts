import { NotFoundException } from "@nestjs/common";
import { Query, Resolver,Args } from "@nestjs/graphql";
import { User } from "./dto/user.entity";
import { UsersService } from "./users.service";

@Resolver()
export class UserResolver{
    constructor(private readonly userService: UsersService){}
    @Query(returns => [User])
    fetchUsers(){
        return this.userService.findAll();
    }
    @Query(returns => User)
    async fetchOneUser(
        @Args({name: 'username', type: () => String }) username: string
    )
    {
        const found = await this.userService.findByUsername(username);
        if(found){
            return found;
        }else{
            throw new NotFoundException('user not found');
        }
    }
}