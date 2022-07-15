import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Vous etes dans l\'api de la boutique avec nest js !';
  }
}
