import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {GetStateService} from "../get-state.service";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Output() sendSignal: EventEmitter<any> = new EventEmitter();
  state:boolean;

  @Input() id:number;
  @Input() parentId:number;

  positionId:number;  

  constructor(private getState:GetStateService) { }

  ngOnInit() {
    this.state = this.getState.getFirstState();
  }


  
  markBox($event) {
    this.positionId = (3*this.parentId) + this.id;
    this.sendSignal.emit({id:this.positionId, state:this.state);
    console.log((3*this.parentId) + this.id);

    //type EventTarget but cast as HTMLElement
    var toBeChanged = <HTMLScriptElement>event.target;
    this.state = this.getState.getCurrentState();
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
