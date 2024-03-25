import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldInformationComponent } from './world-information/world-information.component';
import { MapDisplayComponent } from './map-display/map-display.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldInformationComponent,
    MapDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
