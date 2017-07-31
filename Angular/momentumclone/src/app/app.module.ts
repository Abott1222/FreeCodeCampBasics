import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './toDo/to-do-list/to-do-list.component';
import { ToDoElementComponent } from './toDo/to-do-element/to-do-element.component';
import {ToDoService} from './toDo/to-do.service';
@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoElementComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
