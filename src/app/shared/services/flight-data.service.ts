import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlightData } from '../models/flight-data.model';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {

  apiUrl = 'http://127.0.0.1:8000/api/v1/flights/';
  httpHeaders = new HttpHeaders({ 'content-type': 'application/jason' });

  constructor(private http: HttpClient) { }

  getAllFlightDetails() {
    return this.http.get<FlightData[]>(this.apiUrl, { headers: this.httpHeaders });
  }
}
