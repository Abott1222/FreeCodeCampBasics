import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ToDoService} from '../to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDos: {"state": string, "content": string}[];
  clicked: boolean;
  @Output() increaseSize: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(private todo: ToDoService) { }

  ngOnInit() {
    this.toDos = this.todo.getInboxTodos();
    this.clicked = false;
  }

  getAllTodos() {
    this.toDos = this.todo.getToDos();
  }

  addToDo(element) {
    this.toDos.push({"state": "Inbox", "content": element});
    if(this.toDos.length > 5 && this.toDos.length - 7 % 2 === 0) {
      this.increaseSize.emit(this.toDos.length);
    }
  }

  addToDoEnter(event, element) {
    if(event.key === "Enter") {
      this.toDos.push({"state": "Inbox", "content": element});
    }
    if(this.toDos.length > 5 && this.toDos.length - 7 % 2 === 0) {
      this.increaseSize.emit(this.toDos.length);
    }
  }

  getInboxTodos() {
    this.toDos = this.todo.getInboxTodos();
  }

  getFinishedTodos() {
    this.toDos = this.todo.getFinishedTodos();
  }

  changeState(elementContent) {
    this.todo.changeState(elementContent);
  }
}
