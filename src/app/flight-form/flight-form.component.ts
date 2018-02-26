import { Flight } from './../models/flight';
import { AirlineType } from '../models/airline-type';
import { CommonFunction } from '../common';
import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight-service';
import { AirlineDropDownService } from '../services/airline-service';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanComponentDeactivate } from '../services/can-deactivate-guard.service';
import { Response } from '@angular/http';
import { AppError } from '../app-error/App-error';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.css']
})
export class FlightFormComponent implements OnInit,CanComponentDeactivate {


  flight:Flight = new Flight();
  airlineType: AirlineType[] = [];

  constructor(private flightService: FlightService,
              private airlineserivice: AirlineDropDownService,
              private router:Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.flight ={
                  flightFrom:'',
                  flightTo:'',
                  airline:'',
                  arrivalDate:new CommonFunction().getCurrentDate(),
                  departureDate:new CommonFunction().getCurrentDate(),
                  arrivalTime:'',
                  departureTime:''
                  }
                  /*this.route.data.subscribe((data: any) => {
                  this.airlineType = data.airlineType;
                  });*/

                  this.airlineserivice.getAirlineType().subscribe(
                    (airlineType:AirlineType[]) => {
                      console.log('Airline type  returned from the server:',airlineType);
                      this.airlineType = airlineType;
                    },
                    (error:AppError)=>{
                      console.log('Error came while fetching Airline-Type details: ',error.OriginalError.statusText)
                    }
                
                  )

              }
  onSave(values)
  {
    this.flight={
      flightFrom:values.flightFrom,
      flightTo:values.flightTo,
      airline:values.airline,
      arrivalDate:values.arrivalDate,
      departureDate:values.departureDate,
      arrivalTime:values.arrivalTime,
      departureTime:values.departureTime

    };

    //this.flightService.createFlight(this.flight);
    //this.router.navigate(['/flightList'])
    this.flightService.createFlight(this.flight).subscribe(
      (newFlight: Flight)=>{
        console.log('New Flight Added Successfully');
        console.log('Flight: ', newFlight);
        this.router.navigate(['/flightList'])
      }),
      (error:AppError)=>{
        console.log('Error came while fetching employe details: ',error.OriginalError.statusText)
      }
}
 
canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
  console.log('Flight-FormComponent.canDeactivate() invoked.');
  if (
    (this.flight.flightFrom !== '' ||
      this.flight.flightTo !== '' ||
      this.flight.airline !==  ''||
      this.flight.arrivalDate !== '' ||
      this.flight.arrivalTime !== '' ||
      this.flight.departureDate !== '' ||
      this.flight.departureTime !== '' 
    
  ) ){
    return confirm('Do you want to continue the entries?');
  } else {
    return true;
  }
}

    /**Reset a form */
     resetForm(f) {
       f.reset();
     };
}
