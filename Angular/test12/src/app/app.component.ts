import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  isLoggedIn:boolean;

  ngOnInit() {
    this.isLoggedIn = false;
  }
}
