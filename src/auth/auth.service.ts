import { Injectable, NotFoundException } from '@nestjs/common';
import { Iuser } from 'src/users/user.interface';
import { UsersService } from 'src/users/users.service';
import { Session } from './dto/session.type';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  register(user: Iuser) {
    return this.userService.insert(user);
  }
  async login(logins: Iuser) : Promise<Session> {
    // verif user credentials
    const user = await this.userService.findByusernameOrFail(logins.username);
    if(user.password !== logins.password) {
      throw new NotFoundException('Identifiants incorrectes !');
    }
    // create a session
    return { user, token: "" };
  }
}
