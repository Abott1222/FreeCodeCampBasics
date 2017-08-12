import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  localWeather: any;

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(function(position) {
        // position.coords.longitude/latitude
        this.localWeather = this.weather.getWeather(position);
      });
    } else {
      /* geolocation IS NOT available */
      /* return null to indicate error */
    }
  }

}
