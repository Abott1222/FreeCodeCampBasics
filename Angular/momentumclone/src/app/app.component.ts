import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  toDoTriggered = false;

  triggerToDoList() {
    this.toDoTriggered = !this.toDoTriggered;
  }
}
