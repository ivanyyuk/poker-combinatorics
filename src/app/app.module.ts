import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HandChartComponent } from './hand-chart/hand-chart.component';
import { SingleHandBox } from './single-hand-box/single-hand-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HandChartComponent,
    SingleHandBox
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
