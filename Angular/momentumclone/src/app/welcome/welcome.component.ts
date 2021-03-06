import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  time: any;
  name: string;
  focus: string;
  focusSelected:boolean;
  timeOfDay: string;
  constructor() { }

  ngOnInit() {
    this.getTime();
    setInterval(this.getTime.bind(this), 500);
    this.focusSelected = false;
  }

  getTime() {
    let today = new Date();
    this.time = {};
    this.time["hours"] = today.getHours();
    this.time["minutes"] = today.getMinutes();
    if(this.time.minutes < 10) {
      this.time.minutes = "0" + this.time.minutes;
    }
    if(this.time.seconds < 10) {
      this.time.seconds = "0" + this.time.seconds;
    }
    this.time["seconds"] = today.getSeconds();
    if (this.time.hours >= 17) {
      this.timeOfDay = "Evening";
    } else if (this.time.hours >= 11 && this.time.hours < 17) {
      this.timeOfDay = "Afternoon";
    } else {
      this.timeOfDay = "Morning";
    }

  }

  handleEnter(event, input) {
    if(event.key === "Enter") {

      this.name = input.value;
    }
  }

  handleEnterName(event, input) {
    if(event.key === "Enter") {

      this.name = input.value;
    }
  }

  handleFocus(event,input) {
    if(event.key === "Enter") {
      this.focus = input.value;
      alert(this.focus);
      this.focusSelected = true;
    }
  }

  getFocus() {
    return {state: "None", content: this.focus};
  }

}
