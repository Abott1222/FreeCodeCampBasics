import { Component, OnInit, Input, EventEmitter, Output, Inject, forwardRef} from '@angular/core';
import {GetStateService} from "../get-state.service";
import {GameComponent} from "../game/game.component";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Output() sendSignal: EventEmitter<any> = new EventEmitter();
  state:boolean;
  won:boolean;

  @Input() id:number;
  @Input() parentId:number;

  positionId:number;  

  constructor(private getState:GetStateService, @Inject(forwardRef(() => GameComponent)) private _parent:GameComponent) { }

  ngOnInit() {
    this.state = this.getState.getFirstState();
  }


  
  markBox($event) {
    this.won = this._parent.isWinner();
    if(!this.won) {
      this.positionId = (3*this.parentId) + this.id;
      this.state = this.getState.getCurrentState();
      this.sendSignal.emit({id: this.positionId, state: this.state});

      //type EventTarget but cast as HTMLElement
      var toBeChanged = <HTMLScriptElement>event.target;
      if(this.state) {
        //toBeChanged.innerText = "X";
        toBeChanged.style.backgroundColor = "green";
        this.getState.changeState();
      } else {
        //toBeChanged.innerText = "O";
        toBeChanged.style.backgroundColor = "red";
        this.getState.changeState();
      }
      /*
      //console.log(toBeChanged.classList);
      toBeChanged.style.textAlign = "center";
      toBeChanged.style.fontSize = "600%";
      */
    }
  }
  

}
