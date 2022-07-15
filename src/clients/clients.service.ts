import { Injectable,NotFoundException,HttpException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  public clients = [
    { id: 1, name: 'Cheikhou', prenom: 'diokou', company: 'Diokou tech' },
    { id: 2, name: 'alui', prenom: 'Djalo', company: 'Djalo tech' },
    { id: 3, name: 'Aissatou', prenom: 'diokou', company: 'Aissatou Make-UP' },
    { id: 4, name: 'Mariama', prenom: 'diokou', company: 'Expert Comptable' },
  ];
  create(item) {
    console.log(item);
    //add client on tabs
    this.clients.push(item);
    return item;
  }

  findAll() {
    return this.clients;
  }

  findOne(id: number) {
    let item = this.clients.find((ele) => ele.id == id);
    if (item) {
      return item;
    } else {
      throw new NotFoundException('client introuvable !');
    }
  }

  update(id: number, item: UpdateClientDto) {
    const indexElement = this.clients.findIndex((el) => el.id == id);
    if(indexElement < 0){
      throw new NotFoundException('client introuvable');
    }else{
      this.clients[indexElement] = {...this.clients[indexElement],...item};
      return this.clients[indexElement];
    }
  }

  remove(id: number) {
    let indexItem = this.clients.findIndex((ele) => ele.id == id);
    if(indexItem !== -1){
    // remove clients
    const item = this.clients.splice(indexItem,1);
    return item;
    }else{
      throw new NotFoundException('Client introuvable !');
    }
  }
}
