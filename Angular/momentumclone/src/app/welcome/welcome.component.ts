import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  time: any;
  name: string;
  timeOfDay: string;
  constructor() { }

  ngOnInit() {
    this.getTime();
    setInterval(this.getTime.bind(this), 500);
  }

  getTime() {
    let today = new Date();
    this.time = {};
    this.time["hours"] = today.getHours();
    this.time["minutes"] = today.getMinutes();
    console.log(this.time.minutes.length);
    console.log(typeof this.time.minutes);
    if(this.time.minutes < 10) {
      this.time.minutes = "0" + this.time.minutes;
    }
    if(this.time.seconds < 10) {
      this.time.seconds = "0" + this.time.seconds;
    }
    this.time["seconds"] = today.getSeconds();
    console.log(this.time.seconds);
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
      console.log(input.value);
      this.name = input.value;
    }
  }

  handleEnterName(event, input) {
    if(event.key === "Enter") {
      console.log(input.value);
      this.name = input.value;
    }
  }

}
