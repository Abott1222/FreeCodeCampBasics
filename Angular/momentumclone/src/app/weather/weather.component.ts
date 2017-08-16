import { Component, OnInit } from '@angular/core';
import {WeatherService} from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  localWeather: any;
  position:any;
  temp:any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    let positionTemp;
    const myself = this;
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(function(position) {
        // position.coords.longitude/latitude
        myself.localWeather = myself.weatherService.getWeather(position.coords.latitude, position.coords.longitude);
        //console.log(this.localWeather);
      });
    } else {
      /* geolocation IS NOT available */
      /* return null to indicate error */
    }
    /*
    this.position = positionTemp;
    console.log(this.position);
    this.localWeather = this.weatherService.getWeather(this.position.coords.latitude, this.position.coords.longitude);
    console.log(this.localWeather);
    */

  }

  getWeather(pos) {
    this.localWeather = this.weatherService.getWeather(this.position.coords.latitude, this.position.coords.longitude);
    this.displayData();
  }

  displayData() {
    this.temp = this.convertKelvinToF(this.localWeather.main.temp);
  }

  convertKelvinToF(kelvinUnit) {
    return kelvinUnit * (9/5) - 459.76;
  }

}
