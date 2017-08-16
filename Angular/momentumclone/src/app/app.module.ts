import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule  } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ToDoListComponent } from './toDo/to-do-list/to-do-list.component';
import { ToDoElementComponent } from './toDo/to-do-element/to-do-element.component';
import {ToDoService} from './toDo/to-do.service';
import {WeatherService} from "./weather/weather.service";
import { WelcomeComponent } from './welcome/welcome.component';
import { WeatherComponent } from './weather/weather.component';
@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoElementComponent,
    WelcomeComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    //HttpClientModule needs to be after BrowserModule?
    HttpClientModule
  ],
  providers: [ToDoService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
