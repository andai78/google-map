import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DateComponent } from './date/date.component';
import { ResourceComponent } from './resource/resource.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { DatePickerModule } from 'ng2-datepicker';

import { FetchDataService } from './fetch-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DateComponent,
    ResourceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBV3EgUQwsjSait-3bAgitlJtRZfDNiuMA'}),
    DatePickerModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
