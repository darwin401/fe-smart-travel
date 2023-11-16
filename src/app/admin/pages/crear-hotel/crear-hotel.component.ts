import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-hotel',
  templateUrl: './crear-hotel.component.html',
  styleUrls: ['./crear-hotel.component.css']
})
export class CrearHotelComponent {
  hideRequiredControl = new FormControl(false);
  hotel!: FormGroup;
  bedroom!: FormGroup;

  typeRoom: any[] = [
    {value: 'Indivudual', viewValue: 'Indivudual'},
    {value: 'Doble', viewValue: 'Doble'},
    {value: 'Triple', viewValue: 'Triple'},
    {value: 'Familiar', viewValue: 'Familiar'},
  ];

  totalRoom: any[] = [
    {value: 5, viewValue: 'Cinco - 5'},
    {value: 6, viewValue: 'Seis - 6'},
    {value: 7, viewValue: 'Siete - 7'},
    {value: 8, viewValue: 'Ocho - 8'},
  ];

  cities: any[] = [
    {value: 'Cartagena', viewValue: 'Cartagena'},
    {value: 'San Andres', viewValue: 'San Andres'},
    {value: 'Santa Marta', viewValue: 'Santa Marta'},
    {value: 'Medellin', viewValue: 'Medellin'},
    {value: 'Cali', viewValue: 'Cali'},
    {value: 'Manizales', viewValue: 'Manizales'},
    {value: 'Bogota', viewValue: 'Bogota'},
  ];

  roomLocation: any[] = [
    {value: 'Piso 1', viewValue: 'Piso 1'},
    {value: 'Piso 2', viewValue: 'Piso 2'},
    {value: 'Piso 3', viewValue: 'Piso 3'},
    {value: 'Piso 5', viewValue: 'Piso 5'},
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
  ) {
    this.initForms();
  }
  
  initForms(){
    this.hotel = this._formBuilder.group ({
      name: [ '', Validators.required ],
      city: [ '', Validators.required ],
      direction: [ '', Validators.required ],
      image: [ '', Validators.required ],
      available: [ true, Validators.required ],
      bedrooms: this._formBuilder.array([this.bedroomForm()])
    });
  }

  get bedrooms(){
    return this.hotel.get("bedrooms") as FormArray;
  }

  bedroomForm(){
    return this._formBuilder.group(
      {
        type: [ '', Validators.required ],
        image: [ '', Validators.required ],
        nightPrice: [ '', Validators.required ],
        location: [ '', Validators.required ],
        available: [ true, Validators.required ],
        booking: [ {start: "", end: ""} ],
      }
    );
  }
  addNewBedroom(){
    this.bedrooms.push(this.bedroomForm());
  }

  remove( room: number){
    if(this.bedrooms.value.length > 1)this.bedrooms.removeAt(room);
  }
  saveHotel(){
    if(this.hotel.valid){
      const hotels = JSON.parse(localStorage.getItem('hoteles') || '{}');
      
      this.hotel.value.bedrooms.forEach( (hotel:any, index:number) => {
        this.hotel.value.bedrooms[index].id = (index +=1)
      });
      this.hotel.value.id = hotels.length + 1;
      hotels.push(this.hotel.value);
      localStorage.setItem('hoteles', JSON.stringify(hotels));

      this.clearForm();
    }
  }

  clearForm(){
    this.hotel.reset();
    this.bedrooms.clear();
    this.addNewBedroom();
  }
  openSnackBar( message: string ) {
    this._snackBar.open(message,'',{
      duration: 2000, 
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
