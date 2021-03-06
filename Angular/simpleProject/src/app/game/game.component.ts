import { Component, OnInit, Output } from '@angular/core';
import {GetWinnersService} from "../get-winners-service.service";
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  title:string;
  positionArray: any[] = [];
  count:number;
  winners: number[][];
  isWinnerVariable: boolean;
  winner:number;
  winnersCopy: number[];

  @Output() won:any;

  constructor(private winnersService: GetWinnersService) { }

  ngOnInit() {
    this.title = "Welcome to the game";
    this.positionArray[0] = [];
    this.positionArray[1] = [];
    this.count = 0;
    //this.winners = [[4,7,10], [5,8,11], [6,9,12], [4,5,6], [7,8,9], [10,11,12], [4,8,12], [6,8,10]];
    this.isWinnerVariable = false;
    this.winners = this.winnersService.getCopyOfWinners();


  }

  handleBubbleEvent(obj) {
    let i = obj.state ? 1 : 0;
    //console.log("top level event" + obj.id + " state is " + i);
    this.positionArray[i].push(obj.id);
    //console.log(this.positionArray);
  }

  isWinner() {
    var winnersCopy;
    this.positionArray.forEach( (posXArray,index) => {
      for(var i=0; i<this.winners.length; i++) {
        winnersCopy = this.winners.slice();
        posXArray.forEach( (pos) => {
          var positionToDelete = this.winners[i].indexOf(pos);
          if(positionToDelete > -1) {
            winnersCopy[i].splice(positionToDelete, 1);
          }
          if(winnersCopy[i].length === 0) {
            this.isWinnerVariable = true;
            this.winner = index;
            console.log(this.isWinnerVariable);
          }
          console.log("winners copy is currently " + this.winnersCopy);
        });
      }
  });
  if(this.isWinnerVariable) return true;
  else return false;
  }

}
