import { Injectable,NotFoundException,HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { Model } from 'mongoose';
import { clientModelName } from './client.model';
@Injectable()
export class ClientsService {

  constructor(@InjectModel(clientModelName) private model: Model<Client> ){}

  create(item) {
    console.log({item});
    return this.model.create(item);
  }

  findAll() {
    return this.model.find({});
  }

  async findOne(id: string) {
    let item = await  this.model.findOne({"_id": id});
    if (item) {
      return item;
    } else {
      throw new NotFoundException('client introuvable !');
    }
  }

  update(id: string, item: UpdateClientDto) {
    return this.model.updateOne({"_id": id},{$set : item});
  }

  remove(id: string) {
    return this.model.deleteOne({"_id": id});
  }
}
