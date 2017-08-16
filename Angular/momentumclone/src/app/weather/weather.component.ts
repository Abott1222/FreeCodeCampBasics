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
  weatherUp:boolean;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherUp = false;
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(function(position) {
        // position.coords.longitude/latitude
        this.weatherService.getWeather(position.coords.latitude, position.coords.longitude).then(response => {
          this.localWeather = response;
          this.displayData();
        });
      }.bind(this));

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

  displayData() {
    alert("attempting to display data!");
    this.temp = this.convertKelvinToF(this.localWeather.main.temp);
    this.weatherUp = true;
    console.log("temp is " + this.temp);
  }

  convertKelvinToF(kelvinUnit) {
    return Math.round(kelvinUnit * (9/5) - 459.76);
  }

}
