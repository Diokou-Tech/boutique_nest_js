import { Resolver,Query,Args } from '@nestjs/graphql';
import { ClientsService } from './clients.service';
import { Client } from './entities/client.entity';

@Resolver()
export class ClientsResolver {
    constructor(private readonly clientService: ClientsService){}  
    @Query( returns => [Client], { nullable : true})
    fetchClients(){
        return this.clientService.findAll();
    } 
    @Query(returns => Client)
    fetchOneClient(
        @Args({ name: 'id', type: () => String  }) id: string
    )
    {
        return this.clientService.findOne(id);
    }
}
