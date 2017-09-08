import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() {}
  cars = ['booooo', 'woooo', 'bhoooooo'];

  myData(){
  return 'this is my data mofo';
  }

}
