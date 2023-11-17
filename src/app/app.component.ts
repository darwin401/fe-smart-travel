import { Component } from '@angular/core';
import listaHoteles from './pages/landing/listaHoteles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FE-Smart-Travel';
  constructor(){
    localStorage.setItem('hoteles', JSON.stringify(listaHoteles));
  }
}
