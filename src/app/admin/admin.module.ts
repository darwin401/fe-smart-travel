import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { ListarHotelesComponent } from './pages/listar-hoteles/listar-hoteles.component';
import { CrearHotelComponent } from './pages/crear-hotel/crear-hotel.component';
import { PagesComponent } from './pages.component';
import { DetailsComponent } from './pages/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarHotelesComponent,
    CrearHotelComponent,
    PagesComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
    AdminRoutingModule,
    MaterialModule,
  ]
})
export class AdminModule { }
