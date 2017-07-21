import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  markBox($event) {
    var toBeChanged = event.target;
    //type EventTarget
    console.log(toBeChanged);
  }

}
