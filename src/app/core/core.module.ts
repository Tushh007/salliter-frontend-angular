import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlightModule } from '../modules/flight/flight.module';
import { BusModule } from '../modules/bus/bus.module';
import { AuthenticationModule } from '../modules/authentication/authentication.module';
import { HotelModule } from '../modules/hotel/hotel.module';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatIconModule,
    FlightModule,
    BusModule,
    HotelModule,
    AuthenticationModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class CoreModule { }
