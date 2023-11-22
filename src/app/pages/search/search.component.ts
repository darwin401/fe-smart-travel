import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface City {
  value: string;
  viewValue: string;
}
interface SearchHotel {
  start?: string;
  end?: string;
  pax: number;
  city?: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() searchHotel: EventEmitter<SearchHotel> = new EventEmitter();
  @Output() clear: EventEmitter<any> = new EventEmitter();

  selectedValue!: string;
  selectedCar!: string;
  form: FormGroup;
  counterPax: number = 1;
  min: string = new Date().toISOString().split('T')[0];

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    const fechaObj = new Date();

    const month = fechaObj.getMonth();
    const day = fechaObj.getDate();
    const year = fechaObj.getFullYear();
    
    this.form = this.fb.group({
      start: [new Date(year, month, day)],
      end: [new Date(year, month, day + 5)],
      city: [''],
      pax: [1],
    });

  }
  ngOnInit(){
    this.search();
  }

  cities: City[] = [
    { value: 'Cartagena', viewValue: 'Cartagena' },
    { value: 'San Andres', viewValue: 'San Andres' },
    { value: 'Santa Marta', viewValue: 'Santa Marta' },
    { value: 'Medellin', viewValue: 'Medellin' },
  ];

  increment(): void {
    if (this.counterPax < 8) this.counterPax += 1;
    this.form.get('pax')!.patchValue(this.counterPax);
  }
  decrement() {
    if (this.counterPax > 1) this.counterPax -= 1;
    this.form.get('pax')!.patchValue(this.counterPax);
  }
  search() {
    const { start, end, pax, city } = this.form.value;

    const dataSearch = {
      start: start ? this.obtenerFechaFormateada(start) : '',
      end: end ? this.obtenerFechaFormateada(end) : '',
      pax,
      city,
    };

    this.searchHotel.emit(dataSearch);
  }
  clearFilter() {
    this.clear.emit();
    this.form.setValue({ start: '', end: '', pax: 1, city: '' });
  }

  obtenerFechaFormateada(fecha: Date) {
    const fechaObj = new Date(fecha);

    const mes = fechaObj.getMonth() + 1;
    const dia = fechaObj.getDate();
    const anio = fechaObj.getFullYear();

    const mesFormateado = mes < 10 ? `0${mes}` : mes;
    const diaFormateado = dia < 10 ? `0${dia}` : dia;

    const fechaFormateada = `${anio}/${mesFormateado}/${diaFormateado}`;

    return fechaFormateada;
  }

  openSnackBar() {
    this._snackBar.open('Complete los datos de forma correcta', '⚠️', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
