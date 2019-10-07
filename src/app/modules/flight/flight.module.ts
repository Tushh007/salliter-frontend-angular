import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ViewFlightComponent } from './components/view-flight/view-flight.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [SearchFlightComponent, ViewFlightComponent],
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
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    SearchFlightComponent,
    ViewFlightComponent
  ]
})
export class FlightModule { }
