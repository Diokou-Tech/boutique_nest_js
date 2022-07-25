import { Controller,Get } from '@nestjs/common';
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
}
