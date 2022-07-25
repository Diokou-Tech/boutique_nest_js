import { Injectable, NotFoundException,Res } from '@nestjs/common';
import { Iuser } from 'src/users/user.interface';
import { UsersService } from 'src/users/users.service';
import { Session } from './dto/session.type';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async register(user: Iuser) {
    try{
      let new_user = await this.userService.insert(user);
      new_user = new_user.toObject();
      delete new_user.password;
      const token = jwt.sign(new_user, process.env.SECRET_KEY, {
        expiresIn: '3h',
      });
      return { user: new_user, token };
    }catch(error){
      throw new NotFoundException(error.message);
    }
  }

  async login(logins: Iuser): Promise<Session> {
    // verif user credentials
    let user = await this.userService.findByusernameOrFail(logins.username);
    if (user.password !== logins.password) {
      throw new NotFoundException('Identifiants incorrectes !');
    }
    user = user.toObject();
    delete user.password;
    // create a session
    const token = jwt.sign({ user }, process.env.SECRET_KEY, {
      expiresIn: '3h',
    });
    return { user, token };
  }
  async verifToken(token: string): Promise<boolean | Iuser> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
        if (err) {
          resolve(false);
        } else {
          resolve(data);
        }
      });
    });
  }
  async findAll(){
    return this.userService.findAll();
  }
  // createToken(user): Promise<any> {
  //   user = user.toObkect();
  //   delete user.password;
  //   const token = jwt.sign({ user }, process.env.SECRET_KEY, {
  //     expiresIn: '3h',
  //   });
  //   return { user, token };
  // }
}
