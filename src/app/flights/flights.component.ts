import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight-service';
import { Flight } from '../models/flight';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
