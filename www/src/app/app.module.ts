import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {EeSayacModule} from "ee-sayac";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EeSayacModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
