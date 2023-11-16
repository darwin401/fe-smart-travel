import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-hoteles',
  templateUrl: './listar-hoteles.component.html',
  styleUrls: ['./listar-hoteles.component.css']
})
export class ListarHotelesComponent {

  displayedColumns: string[] = ['nombre', 'ciudad', 'direccion', 'habitaciones', 'estado', 'acciones'];
  dataSource: any[] = [];

  constructor(
    private _snackBar: MatSnackBar, 
  ) {
    this.dataSource = JSON.parse(localStorage.getItem('hoteles') || '[]');
  }
  
  mensajeExito(){
    this._snackBar.open('Se elimino correctamente','',{duration: 2000, horizontalPosition: 'right'});
  }

}
