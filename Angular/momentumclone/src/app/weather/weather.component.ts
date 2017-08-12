import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  localWeather: any;
  position:any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    let positionTemp;
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(function(pos) {
        // position.coords.longitude/latitude
        console.log(pos);
        positionTemp = pos;
        //console.log(this.localWeather);
      });
    } else {
      /* geolocation IS NOT available */
      /* return null to indicate error */
    }
    this.position = positionTemp;
    console.log(this.position);
    this.localWeather = this.weatherService.getWeather(this.position.coords.latitude, this.position.coords.longitude);
    console.log(this.localWeather);

  }

}
