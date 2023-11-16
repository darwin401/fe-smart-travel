import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CrearHotelComponent } from './pages/crear-hotel/crear-hotel.component';
import { ListarHotelesComponent } from './pages/listar-hoteles/listar-hoteles.component';
import { EditarHotelComponent } from './pages/editar-hotel/editar-hotel.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'crear', component: CrearHotelComponent
  },
  {
    path: 'editar/:id', component: EditarHotelComponent
  },
  {
    path: 'listar', component: ListarHotelesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
