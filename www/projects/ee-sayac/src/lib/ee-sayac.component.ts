import { Component, OnInit } from '@angular/core';
import {EeSayacService} from "./ee-sayac.service";

@Component({
  selector: 'lib-ee-sayac',
  templateUrl:`ee-sayac.component.html`,
  styles: [
  ]
})
export class EeSayacComponent implements OnInit {
  counter = 0;
  constructor(private eeSayacService:EeSayacService) { }

  ngOnInit(): void {
  }

  // handler for button click
  buttonClick() {
    this.counter++;
    this.eeSayacService.updateCounter(this.counter);

  }
}
