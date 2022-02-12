import { Component } from '@angular/core';
import { GetWeatherService } from './shared/get-weather.service';
import { Forecast } from './shared/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  forecast!: Forecast;
  error: string = '';

  constructor(
    private cityWeather: GetWeatherService
  ) { }

  getForecast(city: string) {
    this.cityWeather.fetchForecast(city.trim())
      .subscribe(forecast => {
        this.forecast = forecast;
        this.forecast.weather[0].icon = `http://openweathermap.org/img/w/${ forecast.weather[0].icon }.png`
        console.log('Forecast: ', this.forecast);
        this.error = '';
      }, error => {
        console.log('Error: ', error);
        this.error = error.error.message;
      })
  }
}
