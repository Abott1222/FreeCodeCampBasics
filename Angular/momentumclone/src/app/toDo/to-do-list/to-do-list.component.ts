import { Component, OnInit } from '@angular/core';
import {ToDoService} from '../to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDos: string[];
  clicked: boolean;
  constructor(private todo: ToDoService) { }

  ngOnInit() {
    this.toDos = this.todo.getToDos();
    this.clicked = false;
  }

  addToDo(element) {
    this.todo.addToDo(element);
  }

}
