import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitsController } from './produits/produits.controller';
import { ProduitsService } from './produits/produits.service';
import { ClientsModule } from './clients/clients.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule} from '@nestjs/config'
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
      ConfigModule.forRoot({isGlobal : true}),
      ClientsModule,
      MongooseModule.forRoot(process.env.MONGO_URL),
      UsersModule,
      AuthModule,
  ],
  controllers: [AppController, ProduitsController],
  providers: [AppService, ProduitsService],
})
export class AppModule {}
