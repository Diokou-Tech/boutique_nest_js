import { Controller,Get,Body,Post } from '@nestjs/common';
import { Ireservation } from './db/reservation.interface';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
export class ReservationsController {
    constructor(private reservationService: ReservationsService){}

    @Get()
    findAll(){
        return this.reservationService.findAll();
    }
    @Get(':id')
    getOne(id: string){
        return this.reservationService.getOne(id);
    }
    @Post()
    insertOne(@Body() reservation:Ireservation){
        return this.reservationService.insertOne(reservation);
    }
}
