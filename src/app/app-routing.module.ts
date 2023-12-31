import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LandingComponent } from './pages/landing/landing.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { PagesComponent } from './admin/pages.component';

const routes: Routes = [
  
  { path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule ),}
    ] 
  },
  { path: '', component: LandingComponent },
  { path: 'booking', component: BookingsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo:'/', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
  // { 
  //   path: 'dashboard',
  //   loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule ),
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
