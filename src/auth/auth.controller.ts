import { Body, Controller, Post } from '@nestjs/common';
import { Iuser } from 'src/users/user.interface';
import { AuthService } from './auth.service';
import { Session } from './dto/session.type';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() user: Iuser): Promise<Session | any>{
    return this.authService.register(user);
  }
  @Post('login')
  login(@Body() user: Iuser): Promise<any> {
    return this.authService.login(user);
  }
}
