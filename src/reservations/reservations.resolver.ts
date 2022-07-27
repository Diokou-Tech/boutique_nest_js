import { Query, Resolver } from "@nestjs/graphql";
import { ReservationsService } from "./reservations.service";
import { Reservation } from "./db/reservation.entity";
@Resolver()
export class ReservationResolver {
    constructor(private readonly rService:ReservationsService){}

    @Query(returns => [Reservation])
    fetchReservations (){
        return this.rService.findAll();
    }
}