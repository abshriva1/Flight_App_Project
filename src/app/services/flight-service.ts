import { Injectable } from '@angular/core';
import { Flight } from '../models/flight';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppError } from './../app-error/App-error';
import 'rxjs/add/operator/map'; // map called on instance
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';// throw is static method
/**
 * 
 * 
 * @export
 * @class FlightService
 */
@Injectable()
export class FlightService{

      private flightList:Flight[] =[];
      private apiUrl='http://localhost:3000/flights';

      constructor(private http: Http){}
      
      getFlights(): Observable<Flight[]>
      { 
            return this.http.get(this.apiUrl)
            .map((response:Response)=>{return response.json()})
            .catch(this.handleError);
      }
        
      createFlight(flight: Flight):Observable<Flight>
      {
      //this.flightList.unshift(flight);
      return this.http
      .post(this.apiUrl,flight)
      .map((response:Response)=>{return response.json()})
      .catch(this.handleError);
      }

       //Error Handling
       private handleError(error: Response) {
            return Observable.throw(new AppError(error));
          }
    
        
}