import {Component} from "@angular/core";

@Component({
	selector: "event-list",
	templateUrl: "./event-list.component.html",
	styleUrls: ["./event-list.component.css"]
})

export class EventsListComponent {
	event:any

	events = [
	{
		id:1,
		name: "test event",
		date: "0/0/00"
	},
	{
		id:2,
		name: "test event 1",
		date: "1/1/11"
	},
	{
		id:3,
		name: "test event 2",
		date: "2/2/22"
	}
	]

	event1 = {
		id:3,
		name: "test event 2",
		date: "2/2/22"
	}

	handleEventClicked(data) {
		console.log("recieved: " + data);
		console.log(event);
	}
}