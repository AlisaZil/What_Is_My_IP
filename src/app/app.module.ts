import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DetailCardComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
