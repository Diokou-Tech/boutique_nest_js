import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // get request
    const req = context.switchToHttp().getRequest();
    // get authorization token
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.replace('Bearer ', '');
      console.log(token);
      // verif token
      const result = await this.authService.verifToken(token);
      return result;
    } else {
      return false;
    }
  }
}
