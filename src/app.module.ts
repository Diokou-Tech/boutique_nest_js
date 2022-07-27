import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitsController } from './produits/produits.controller';
import { ProduitsService } from './produits/produits.service';
import { ClientsModule } from './clients/clients.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProductResolver } from './produits/produits.resolvers';
import { produitModelName } from './produits/produit.model';
import { ProduitSchema } from './produits/produits.schema';
import { ReservationsModule } from './reservations/reservations.module';
import { GqlUuid } from 'graphql/uuid.scalar';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
    UsersModule,
    AuthModule,
    MongooseModule.forFeature([{ schema: ProduitSchema, name: produitModelName }]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      playground: process.env.MODE_APP !== 'prod',
      resolvers: {
        UUID : GqlUuid
      }
    }),
    ReservationsModule,
  ],
  controllers: [AppController, ProduitsController],
  providers: [AppService, ProduitsService, ProductResolver],
})
export class AppModule {}
