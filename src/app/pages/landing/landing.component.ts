import { Component } from '@angular/core';
import listaHoteles from './listaHoteles';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface SearchHotel {
  start?: string;
  end?: string;
  pax: number;
  city?: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  hoteles = [...listaHoteles];
  listHotels: any;
  title: string = 'Lo más destacado';

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    const hotelesList = JSON.parse(localStorage.getItem('hoteles') || '')
    if(!hotelesList){
      this.listHotels = [...listaHoteles];
      localStorage.setItem('hoteles', JSON.stringify(listaHoteles));
    }else{
      this.listHotels = hotelesList;
    }
    localStorage.removeItem('dataSearch');
    localStorage.removeItem('bedrooms');

  }

  search(data: SearchHotel) {    
    localStorage.setItem('dataSearch', JSON.stringify( data ))
    this.hoteles = JSON.parse(localStorage.getItem('hoteles') || '{}');

    this.title = 'Resultado de Busqueda';
    let leakedHotels = [...this.hoteles];

    if (data.city) {
      leakedHotels = leakedHotels.filter((hotel) => hotel.city == data.city);
    }

    this.listHotels = leakedHotels.filter((hotel, index) => {
      let bedroom = hotel.bedrooms.filter((bedroom: any) => {
        const fechaInicioReserva = new Date(bedroom.booking.start);
        const fechaFinReserva = new Date(bedroom.booking.end);
        const fechaEntrada = new Date(data.start || '');
        const fechaSalida = new Date(data.end || '');

        if (
          !bedroom.available ||
          (fechaEntrada >= fechaInicioReserva && fechaSalida <= fechaFinReserva)
        ) {
          return;
        };

        return [bedroom];
      });
      leakedHotels[index].bedrooms = bedroom;
      return [leakedHotels];
    });
  }

  resetFilter() {
    this.title = 'Lo más destacado';
    this.listHotels = JSON.parse(localStorage.getItem('hoteles') || '{}');
    localStorage.removeItem('dataSearch');
  }

  getHotel(hotel: any) {
    localStorage.setItem('bedrooms', JSON.stringify(hotel));
    if(!localStorage.getItem('dataSearch')){
      return this.openSnackBar();
    }
    this.router.navigateByUrl('/booking');
  }

  openSnackBar() {
    this._snackBar.open('El rango de fechas es necesario','⚠️',{
      duration: 2000, 
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
