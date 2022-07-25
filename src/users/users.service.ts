import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { userModelName } from './users.model';
import { Iuser } from './user.interface';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(userModelName) private model: Model<Iuser>) {}

  insert(user: Iuser) {
      const item = this.model.create(user);
      return item;
  }

  findByUsername(username: string) {
    return this.model.findOne({ username });
  }
  findAll(){
    return this.model.find({});
  }
  async findByusernameOrFail(username: string){
    const found = this.findByUsername(username);
    if (!found) {
      throw new NotFoundException('username introuvable !');
    }
    return found;
  }
}
