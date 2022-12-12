import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }
  public saveMoneyEmitter:EventEmitter<any> = new EventEmitter();
}
