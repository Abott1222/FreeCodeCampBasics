import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  event:any;

  constructor() {
  	this.event = {
  		id: 1,
  		"name": "Alex",
  		"other": "Just a test dude"
  	}
  }

  ngOnInit() {
  }

}
