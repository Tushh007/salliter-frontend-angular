import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHotelComponent } from './components/search-hotel/search-hotel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [SearchHotelComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  exports: [
    SearchHotelComponent
  ]
})
export class HotelModule { }
