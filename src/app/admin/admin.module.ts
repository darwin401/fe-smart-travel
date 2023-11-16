import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { ListarHotelesComponent } from './pages/listar-hoteles/listar-hoteles.component';
import { EditarHotelComponent } from './pages/editar-hotel/editar-hotel.component';
import { CrearHotelComponent } from './pages/crear-hotel/crear-hotel.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    ListarHotelesComponent,
    EditarHotelComponent,
    CrearHotelComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
