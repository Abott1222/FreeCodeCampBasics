import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  localWeather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(function(position) {
        // position.coords.longitude/latitude
        console.log(position);
        this.localWeather = this.weatherService.getWeather(position);
        //console.log(this.localWeather);
      });
    } else {
      /* geolocation IS NOT available */
      /* return null to indicate error */
    }

  }

}
