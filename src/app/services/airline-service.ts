import { Injectable } from '@angular/core';
import { AirlineType } from '../models/airline-type';

import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'; // map called on instance
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';// throw is static method
import { AppError } from '../app-error/App-error';

/**
 * 
 * 
 * @export
 * @class AirlineDropDownService
 */
@Injectable()
export class AirlineDropDownService {

  constructor(private http: Http){}
  private apiUrl='http://localhost:3000/airType';
  airType: AirlineType[] = [];
  
  

  /** Get the Airline Type */
  getAirlineType(): Observable<AirlineType[]>  {
    return this.http.get(this.apiUrl).map((response:Response)=>{return response.json()})
    .catch((error:Response)=>{
      const appError = new AppError(error);
      return Observable.throw(appError);
    });


}
}