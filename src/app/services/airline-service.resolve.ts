
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AirlineDropDownService } from './airline-service';

@Injectable()
export class AirlineTypeResolveService implements Resolve<any> {
  constructor(private _airlineDropDown:AirlineDropDownService ) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log('Resolve guard called');
    return this._airlineDropDown.getAirlineType();
  }
}