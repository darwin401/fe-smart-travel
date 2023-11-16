import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-reservation',
  templateUrl: './confirm-reservation.component.html',
  styleUrls: ['./confirm-reservation.component.css']
})
export class ConfirmReservationComponent {
  hideRequiredControl = new FormControl(false);
  form: FormGroup;
  gender: any[] = [
    {value: 'M', viewValue: 'Masculino'},
    {value: 'F', viewValue: 'Femenino'},
  ];
  docType: any[] = [
    {value: 'CC', viewValue: 'Cedula de Ciudadania'},
    {value: 'TI', viewValue: 'Tarjeta de Identidad'},
    {value: 'PP', viewValue: 'Pasarporte'},
  ];

  constructor(
    public dialogRef: MatDialogRef<ConfirmReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public booking: any,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.form = this._formBuilder.group ({
      name: [ '', Validators.required ],
      lastName: [ '', Validators.required ],
      birthday: [ '', Validators.required ],
      gender: [ '', Validators.required ],
      docType: [ '', Validators.required ],
      numDoc: [ '', Validators.required ],
      email: [ '', Validators.required ],
      phone: [ '', Validators.required ],
      emergencyContact: [ '', Validators.required ],
      emergencyPhone: [ '', Validators.required ]
    });
    
  }

  getFloatLabelValue(): any {
    return ;
  }

  sendData(){    

    if(this.form.invalid){
      return this.openSnackBar('Todos los campos son necesarios');
    }

    const updateHotels = JSON.parse(localStorage.getItem('hoteles') || '{}');
    
    updateHotels.filter( (hotel:any )=>{
      if(hotel.id == this.booking.id){
        return hotel.bedrooms.filter((bedroom:any) =>{
          if(bedroom.id == this.booking.bedrooms.id){
            let update = bedroom;
            update.booking = this.booking.bedrooms.booking;
            update.booking.dataUser = this.form.value;
            return update;
          }
        });
      }
    });

    localStorage.setItem('hoteles', JSON.stringify(updateHotels) );
    this.openSnackBar('La reserva ha sido exitosa');
    this.dialogRef.close();
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 1500);
  }

  openSnackBar( message: string ) {
    this._snackBar.open(message,'',{
      duration: 2000, 
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
