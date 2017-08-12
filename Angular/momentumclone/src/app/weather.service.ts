import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class WeatherService {
  url = "api.openweathermap.org/data/2.5/weather?lat=";
  results: any;
  constructor(private http: HttpClient) { }

  getWeather(geoLocation) {
    this.url = this.url + geoLocation.coords.latitude;
    this.url = this.url + "&lon=" + geoLocation.coords.longitude;
    this.url = this.url + "&APPID=695de6f7660449a1838322fa9f08abf3";
    this.http.get('/api/items').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
      alert("Got results!");
      console.log(this.results);
      return this.results;
    });
  }

}
