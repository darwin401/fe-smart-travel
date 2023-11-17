import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id!: number;
  panelOpenState = false;
  hotel: any;
  bookings: any = [];

  constructor(private activateRoute: ActivatedRoute){
    this.id = parseInt(this.activateRoute.snapshot.paramMap.get('id')!);
    const listHotels = JSON.parse(localStorage.getItem('hoteles') || '{}');
    this.filterHotel(listHotels);
  }

  filterHotel(hotels: any){
    const [getHotel] = hotels.filter( (hotel:any) => hotel.id == this.id );
    this.hotel = getHotel;
    this.getBooking(this.hotel);
  }
  
  getBooking( {bedrooms}: any){
    bedrooms.forEach( (room: any) => {
      if(room.booking?.dataUser){
        this.bookings.push(room);
      }
    });
  }


}
