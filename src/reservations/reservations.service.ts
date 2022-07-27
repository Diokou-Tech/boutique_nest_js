import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ireservation } from './db/reservation.interface';
import { reservationModelName } from './db/reservation.model';

@Injectable()
export class ReservationsService {
    constructor(@InjectModel(reservationModelName) private model : Model<Ireservation>){}

    findAll(){
        return this.model.find();
    }
    async getOne(id: string){
        const item = await this.model.findOne({"_id" : id});
        return item;
    }
    async insertOne(item){
        let reservation = await this.model.create(item);
        return reservation;
    }
}
