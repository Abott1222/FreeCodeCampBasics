import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  title:string;
  positionArray: number[][];
  count:number;
  constructor() { }

  ngOnInit() {
    this.title = "Welcome to the game";
    //this.positionArray[0] = [];
    //this.positionArray[1] = [];
    this.count = 0;
  }

  handleBubbleEvent(obj) {
    let i = obj.state ? 1 : 0;
    console.log("top level event" + obj.id + " state is " + i);
    this.positionArray[i].push(obj.id);
    console.log(this.positionArray);
  }

}
