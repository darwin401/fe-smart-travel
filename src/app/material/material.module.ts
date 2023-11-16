import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 // Angular Material
 import {MatToolbarModule} from '@angular/material/toolbar';
 import {MatIconModule} from '@angular/material/icon';
 import {MatButtonModule} from '@angular/material/button';
 import {MatSidenavModule} from '@angular/material/sidenav';
 import {MatSelectModule} from '@angular/material/select';
 import {MatDatepickerModule} from '@angular/material/datepicker';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatNativeDateModule} from '@angular/material/core';
 import {MatInputModule} from '@angular/material/input';
 import {MatCardModule} from '@angular/material/card';
 import {MatGridListModule} from '@angular/material/grid-list';
 import {MatBadgeModule} from '@angular/material/badge';
 import {MatDialogModule} from '@angular/material/dialog';
 import {MatSnackBarModule} from '@angular/material/snack-bar';
 import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatBadgeModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDividerModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatBadgeModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDividerModule,
  ]
})
export class MaterialModule { }
