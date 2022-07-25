import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { clientModelName } from './client.model';
import { clientSchema } from './clients.schema';
import { ClientsResolver } from './clients.resolver';
@Module({
  imports: [AuthModule,
    MongooseModule.forFeature([{ schema: clientSchema, name: clientModelName }]),
  ],
  controllers: [ClientsController],
  providers: [ClientsService, ClientsResolver]
})
export class ClientsModule {}
