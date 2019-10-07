import { Component, OnInit } from '@angular/core';
import { FlightData } from 'src/app/shared/models/flight-data.model';
import { FlightDataService } from 'src/app/shared/services/flight-data.service';
import { first } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {

  flightData: FlightData[];
  displayedColumns: string[] = ['Source', 'Destination', 'Airline', 'Travel Time', 'Platform', 'Coupon', 'Date'];
  dataSource: any;

  constructor(private flightDataService: FlightDataService) { }

  ngOnInit() {
    this.flightDataService.getAllFlightDetails().pipe(first()).subscribe(data => {
      this.flightData = data;
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
