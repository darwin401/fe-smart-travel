import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmReservationComponent } from '../confirm-reservation/confirm-reservation.component';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
  listBedrooms: any;
  totalNight: number = 1;
  bookingDetails: any;

  constructor(public dialog: MatDialog) {
    this.listBedrooms = JSON.parse(localStorage.getItem('bedrooms') || '{}');
    this.bookingDetails = JSON.parse(
      localStorage.getItem('dataSearch') || '{}'
    );
    this.getTotalNight(this.bookingDetails.start, this.bookingDetails.end);
  }

  booking(bedroom: any) {
    const dataHotel = this.listBedrooms;
    const dataBedroom = bedroom;
    dataBedroom.booking = this.bookingDetails;
    dataBedroom.booking.totalNight = this.totalNight;
    const booking = { ...dataHotel, bedrooms: dataBedroom };

    this.openDialog(booking);
  }

  openDialog(booking: any) {
    const dialogRef = this.dialog.open(ConfirmReservationComponent, { data: booking });
    dialogRef.afterClosed().subscribe((result) => {
      
    });
  }

  getTotalNight(start: string, end: string): void {
    const startDate: Date = new Date(start);
    const endDate: Date = new Date(end);
    const diferenciaMs: number = endDate.getTime() - startDate.getTime();
    const msEnUnDia: number = 1000 * 60 * 60 * 24;
    const cantidadNoches: number = Math.floor(diferenciaMs / msEnUnDia);
    this.totalNight = cantidadNoches;
  }
}
