import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-hotel',
  templateUrl: './crear-hotel.component.html',
  styleUrls: ['./crear-hotel.component.css']
})
export class CrearHotelComponent {
  hideRequiredControl = new FormControl(false);
  id!: number;
  hotel!: FormGroup;
  bedroom!: FormGroup;

  titulo: string = 'Registrar un nuevo';
  textButton: string = 'Crear';
  listHotels: any;
  

  typeRoom: any[] = [
    { value: 'Indivudual', viewValue: 'Indivudual' },
    { value: 'Doble', viewValue: 'Doble' },
    { value: 'Triple', viewValue: 'Triple' },
    { value: 'Familiar', viewValue: 'Familiar' },
  ];

  totalRoom: any[] = [
    { value: 5, viewValue: 'Cinco - 5' },
    { value: 6, viewValue: 'Seis - 6' },
    { value: 7, viewValue: 'Siete - 7' },
    { value: 8, viewValue: 'Ocho - 8' },
  ];

  cities: any[] = [
    { value: 'Cartagena', viewValue: 'Cartagena' },
    { value: 'San Andres', viewValue: 'San Andres' },
    { value: 'Santa Marta', viewValue: 'Santa Marta' },
    { value: 'Medellin', viewValue: 'Medellin' },
    { value: 'Cali', viewValue: 'Cali' },
    { value: 'Manizales', viewValue: 'Manizales' },
    { value: 'Bogota', viewValue: 'Bogota' },
  ];

  roomLocation: any[] = [
    { value: 'Piso 1', viewValue: 'Piso 1' },
    { value: 'Piso 2', viewValue: 'Piso 2' },
    { value: 'Piso 3', viewValue: 'Piso 3' },
    { value: 'Piso 5', viewValue: 'Piso 5' },
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.id = parseInt(this.activateRoute.snapshot.paramMap.get('id')!);
    this.initForms();
  }
  ngOnInit() {
    if (this.id) {
      this.bedrooms.clear();
      this.titulo = 'Editar';
      this.textButton = 'Actualizar';
      this.listHotels = JSON.parse(localStorage.getItem('hoteles') || '{}');
      this.getHotel(this.listHotels);
      return
    };
  }

  initForms() {
    this.hotel = this._formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      city: ['', Validators.required],
      direction: ['', Validators.required],
      image: ['', Validators.required],
      available: [true, Validators.required],
      bedrooms: this._formBuilder.array([this.bedroomForm()])
    });
  }

  bedroomForm() {
    return this._formBuilder.group(
      {
        id: [''],
        type: ['', Validators.required],
        image: ['', Validators.required],
        nightPrice: ['', Validators.required],
        tax: ['', Validators.required],
        location: ['', Validators.required],
        available: [true, Validators.required],
        booking: [{ start: "", end: "" }],
      }
    );
  }
  
  get bedrooms() {
    return this.hotel.get("bedrooms") as FormArray;
  }
  addNewBedroom() {
    this.bedrooms.push(this.bedroomForm());
  }

  remove(room: number) {
    if (this.bedrooms.value.length > 1) this.bedrooms.removeAt(room);
  }

  saveHotel() {
    if (this.hotel.valid) {
      
      if(this.id) return this.updateList(this.listHotels);
      
      this.hotel.value.bedrooms.forEach((hotel: any, index: number) => {
        this.hotel.value.bedrooms[index].id = (index += 1)
      });

      this.hotel.value.id = this.listHotels.length + 1;
      this.listHotels.push(this.hotel.value);

      localStorage.setItem('hoteles', JSON.stringify(this.listHotels));
      this.clearForm();
    }
  }

  updateList(hotels:any){
    hotels.forEach((hotel: any, index: number) => {
      if(hotel.id == this.id){
        hotels[index] = this.hotel.value;
      };
    });
    localStorage.setItem('hoteles', JSON.stringify(hotels));
    this.router.navigateByUrl('/dashboard/hoteles');
  }

  clearForm() {
    this.hotel.reset();
    this.bedrooms.clear();
    this.addNewBedroom();
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  getHotel(hotels: any) {
    const [getHotel] = hotels.filter((hotel: any) => hotel.id == this.id);

    getHotel.bedrooms.forEach((room: any) => {
      this.bedrooms.push(this.updateBedroom(room));
    });

    this.hotel.setValue({
      id: getHotel.id || '',
      name: getHotel.name || '',
      city: getHotel.city || '',
      direction: getHotel.direction || '',
      image: getHotel.image || '',
      available: getHotel.available || '',
      bedrooms: this.bedrooms.value,
    })
  }

  updateBedroom(roomData: any): FormGroup {
    return this._formBuilder.group({
      id: [roomData?.id || ''],
      type: [roomData?.type || ''],
      available: [roomData?.available || ''],
      location: [roomData?.location || ''],
      booking: [{ start: "", end: "" }],
      nightPrice: [roomData?.nightPrice || ''],
      tax: [roomData?.tax || ''],
      image: [roomData?.image || ''],
    });
  }

}
