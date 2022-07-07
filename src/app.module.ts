import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitsController } from './produits/produits.controller';
import { ProduitsService } from './produits/produits.service';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [ClientsModule],
  controllers: [AppController, ProduitsController],
  providers: [AppService, ProduitsService],
})
export class AppModule {}
