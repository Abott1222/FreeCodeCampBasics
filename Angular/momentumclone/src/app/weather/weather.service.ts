import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/* example call
http://api.openweathermap.org/data/2.5/weather?lat=47.0510251&lon=-122.95138159999999&appid=695de6f7660449a1838322fa9f08abf3
*/

@Injectable()
export class WeatherService {
  url = `https://api.openweathermap.org/data/2.5/weather?lat=`;
  results: any;
  constructor(private http: HttpClient) { }
  /*

  TEMP returned in Kelvins!

{"coord":{"lon":-122.95,"lat":47.05},
"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],
"base":"stations",
"main":{"temp":292.36,"pressure":1015,"humidity":56,"temp_min":289.15,"temp_max":295.15},
"visibility":16093,
"wind":{"speed":2.1},
"clouds":{"all":1},
"dt":1502565300,
"sys":{"type":1,"id":2925,"message":0.0057,"country":"US","sunrise":1502543194,"sunset":1502594744},
"id":5805687,"name":"Olympia","cod":200}
  */
  getWeather(latit, longit) {
    this.url = this.url + latit;
    this.url = this.url + "&lon=" + longit  ;
    this.url = this.url + "&APPID=695de6f7660449a1838322fa9f08abf3";
    /* old
    this.http.get(this.url).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['main'];
      alert("Got results!");
      console.log(this.results);
      return this.results;
    });
    */
    /* return PROMISE, component is responsible for subscription... */
    return this.http.get(this.url)
    .toPromise();
  }

}
