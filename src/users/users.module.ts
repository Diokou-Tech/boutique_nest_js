import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './users.schema';
import { userModelName } from './users.model';
import { UserResolver } from './users.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ schema: userSchema, name: userModelName }]),
  ],
  providers: [UsersService,UserResolver],
  exports: [UsersService],
})
export class UsersModule {}
