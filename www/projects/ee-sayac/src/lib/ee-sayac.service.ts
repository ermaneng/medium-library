import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EeSayacService {
  counter = 0;
  // updates counter with given value
  updateCounter(count:number){
    this.counter = count;
  }
  // gets current counter value
  getCounter(){
    return this.counter;
  }
}
