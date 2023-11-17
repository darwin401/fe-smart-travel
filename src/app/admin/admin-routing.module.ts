import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearHotelComponent } from './pages/crear-hotel/crear-hotel.component';
import { ListarHotelesComponent } from './pages/listar-hoteles/listar-hoteles.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: 'hoteles', component: ListarHotelesComponent
  },
  {
    path: 'crear', component: CrearHotelComponent
  },
  {
    path: 'editar/:id', component: CrearHotelComponent
  },
  {
    path: 'detalle-hotel/:id', component: DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
