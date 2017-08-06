import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-element',
  templateUrl: './to-do-element.component.html',
  styleUrls: ['./to-do-element.component.css']
})
export class ToDoElementComponent implements OnInit {
  @Input() todo:any;

  constructor() { }

  ngOnInit() {
  }

}
