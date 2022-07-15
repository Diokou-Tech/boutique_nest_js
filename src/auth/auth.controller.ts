import { Body, Controller, Post } from '@nestjs/common';
import { Iuser } from 'src/users/user.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() user: Iuser): Promise<Iuser> {
    return this.authService.register(user);
  }
  @Post('login')
  login(@Body() user: Iuser): Promise <any> {
    console.log('use', user);
    return this.authService.login(user);
  }
}
