import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ireservation } from './db/reservation.interface';
import { reservationModelName } from './db/reservation.model';

@Injectable()
export class ReservationsService {
    constructor(@InjectModel(reservationModelName) private model : Model<Ireservation>){}
    public reservations = [
        {
        code: "C01",
        produit: {
            name: "orange",
            price: "2000"
        },
        clientId: 2 
        },
        { 
            code: "C02",
            produit: {
                name: "orange",
                price: "2000"
            },
            clientId: 3
        },
    ];
    findAll(){
        return this.reservations;
    }
    async getOne(id: string){
        const item = await this.model.findOne({"_id" : id});
        return item;
    }
}
