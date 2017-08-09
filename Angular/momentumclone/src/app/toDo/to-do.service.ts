import { Injectable } from '@angular/core';

@Injectable()
export class ToDoService {
  todoList: {"state": string, "content": string}[];

  constructor() {
    // this.todoList = ["Thing1", "Thing2", "Thing3"];
    this.todoList = [
      // need to add Today state..
      {"state": "Inbox", "content": "Thing1" },
      {"state": "Inbox", "content": "Thing2"},
      {"state": "Inbox", "content": "Thing3"},
      {"state": "Inbox", "content": "Thing4"},
      {"state": "Inbox", "content": "Thing5"},
    ];
  }

  getToDos() {
    return this.todoList;
  }

  addToDo(todo) {
    this.todoList.push({state: "Inbox", content: todo});
  }

  getInboxTodos() {
    let tmp = this.todoList.filter(function(todo) {
      return todo["state"] === "Inbox";
    });
    return tmp;
  }

  getFinishedTodos() {
    let tmp = this.todoList.filter(function(todo) {
      return todo["state"] === "Done";
    });
    return tmp;
  }

  changeState(elementContent) {
    console.log("Did I get here?");
    this.todoList.forEach(function(todo) {
      if (todo.content === elementContent) {
        if (todo.state === "Inbox") {
          todo.state = "Done";
        } else if (todo.state === "Done") {
          todo.state = "Inbox";
        }
      }
    });
    console.log(this.todoList);
  }

  /*
  removeToDo(element) {
    if (typeof element === 'string') {
      const i = this.todoList.indexOf(element);
      this.todoList.splice(i, 1);
    } else if (typeof element === 'number') {
      this.todoList.splice(element, 1);
    }
  }
  */
}
