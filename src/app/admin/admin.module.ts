import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListarHotelesComponent } from './pages/listar-hoteles/listar-hoteles.component';
import { EditarHotelComponent } from './pages/editar-hotel/editar-hotel.component';
import { CrearHotelComponent } from './pages/crear-hotel/crear-hotel.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ListarHotelesComponent,
    EditarHotelComponent,
    CrearHotelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
