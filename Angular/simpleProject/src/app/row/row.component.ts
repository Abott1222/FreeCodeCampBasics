import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input() colId:number;
  @Output() bubbleUpId: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  handleEvent(obj) {
    console.log("id from row " + obj.id);
    this.bubbleUpId.emit(obj)
  }

}
