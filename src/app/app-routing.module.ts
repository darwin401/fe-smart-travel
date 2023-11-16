import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './pages/admin/pages/dashboard/dashboard.component';
import { BookingsComponent } from './pages/bookings/bookings.component';

const routes: Routes = [
  // { 
  //   path: 'dashboard', 
  //   component: ,
  //   children: [
  //     { path: '', component: DashboardComponent}
  //   ]
  // },
  
  { path: '', component: LandingComponent },
  { path: 'booking', component: BookingsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo:'/', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
