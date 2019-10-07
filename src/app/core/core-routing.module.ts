import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFlightComponent } from '../modules/flight/components/search-flight/search-flight.component';
import { SearchBusComponent } from '../modules/bus/components/search-bus/search-bus.component';
import { SearchHotelComponent } from '../modules/hotel/components/search-hotel/search-hotel.component';
import { RegisterComponent } from '../modules/authentication/components/register/register.component';
import { LoginComponent } from '../modules/authentication/components/login/login.component';
import { ViewFlightComponent } from '../modules/flight/components/view-flight/view-flight.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search-bus', component: SearchBusComponent },
  { path: 'search-hotel', component: SearchHotelComponent },
  { path: 'flight', component: ViewFlightComponent},
  { path: 'search-flight', component: SearchFlightComponent},
  { path: '**', redirectTo: 'search-flight' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
