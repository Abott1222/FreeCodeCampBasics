//to pass in create property event in class

import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
	selector: "event-thumbnail",
	template: `
	<p>
	id: {{event.id}}
	</p>
	<p>
	name: {{event.name}}
	</p>
	<p>
	date: {{event.date}}
	</p>
	<button (click)="handleClickMe()"> Click me! </button>
	`,
	styleUrls: ["./event-thumbnail.component.css"]
})

export class EventThumbnailComponent {
	@Input() event:any;
	//response to event in child component
	@Output() eventClick = new EventEmitter();

	handleClickMe() {
		this.eventClick.emit("foo");
	}
}