import { Injectable } from '@angular/core';

@Injectable()
export class ToDoService {
  todoList: string[];

  constructor() {
    this.todoList = ["Thing1", "Thing2", "Thing3"];
  }

  getToDos() {
    return this.todoList;
  }

  addToDo(todo) {
    this.todoList.push(todo);
  }

  removeToDo(element) {
    if (typeof element === 'string') {
      const i = this.todoList.indexOf(element);
      this.todoList.splice(i, 1);
    } else if (typeof element === 'number') {
      this.todoList.splice(element, 1);
    }
  }
}
