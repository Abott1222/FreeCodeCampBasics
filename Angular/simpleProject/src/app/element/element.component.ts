import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  //@Output() x: EventEmitter<any> = new EventEmitter(); ;

  content:any;

  constructor() { }

  ngOnInit() {
  }


  
  markBox($event) {
    //type EventTarget but cast as HTMLElement
    var toBeChanged = <HTMLScriptElement>event.target;

    toBeChanged.innerHTML = "X";
    //console.log(toBeChanged.classList);
    //toBeChanged.style.textAlign = "center";
    toBeChanged.style.padding = "0px 0 0 0";
  }
  

}
