import { Component, OnInit } from '@angular/core';
import {ToDoService} from '../to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDos: {"state": string, "content": string}[];
  clicked: boolean;
  constructor(private todo: ToDoService) { }

  ngOnInit() {
    this.toDos = this.todo.getToDos();
    this.clicked = false;
  }

  getAllTodos() {
    this.toDos = this.todo.getToDos();
  }

  addToDo(element) {
    this.toDos.push({"state": "Inbox", "content": element});
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
