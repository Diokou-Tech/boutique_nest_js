import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { reservationModelName } from './db/reservation.model';
import { reservationSchema } from './db/reservation.schema';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { ReservationResolver } from './reservations.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ schema: reservationSchema, name:  reservationModelName }])
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService,ReservationResolver]
})
export class ReservationsModule {}
