import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ToDoService} from '../to-do.service';

@Component({
  selector: 'app-to-do-element',
  templateUrl: './to-do-element.component.html',
  styleUrls: ['./to-do-element.component.css']
})
export class ToDoElementComponent implements OnInit {
  @Input() todo:any;
  @Output() finishedTodo = new EventEmitter();
  completed:boolean;

  constructor(private todoService: ToDoService) { }

  ngOnInit() {
    this.completed= false;
  }

  handleCheck(event, ref) {
    //console.log(event.path[1].childNodes[3].innerText); //childNodes);
    if (this.completed === false) {
      ref.style["text-decoration"] = "line-through";
      this.completed = true;
    } else {
      ref.style["text-decoration"] = "none";
      this.completed = false;
    }
    setTimeout(this.changeState(event.path[1].childNodes[3].innerText), 5000);
  }

  changeState(elementContent) {
    alert("changing state");
    this.todoService.changeState(elementContent);
    setTimeout(this.finishedTodo.emit(true), 300000);
  }

}

/*

to delay this 
setTimeout(function() { your_func(); }, 5000);
*/