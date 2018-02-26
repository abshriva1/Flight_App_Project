import { Component, OnInit } from '@angular/core';
//Services
import { FlightService } from '../services/flight-service';
import { AirlineDropDownService } from '../services/airline-service';

//Classes
import { Flight } from '../models/flight';
import { AirlineType } from '../models/airline-type';
import { CommonFunction } from '../common';
import { AppError } from '../app-error/App-error';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  flight: Flight[];
  private searchData: string;

  imageUrl = 'https://openclipart.org/image/800px/svg_to_png/195025/Malaysia-Air-MH17-Flight-Crash-Airplane-Outline-2014072329.png';

  constructor(private flightService: FlightService) { }


  ngOnInit() {
    this.searchData='';
    //this.flight = this.flightService.getFlights();

    this.flightService.getFlights().subscribe(
      (newflight:Flight[])=>{
        console.log('Employee returned from the server:',newflight);
        this.flight=newflight;
  
      }
    )

    console.log(this.flight);
    
  }

}
