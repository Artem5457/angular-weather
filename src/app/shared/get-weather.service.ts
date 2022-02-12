import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Forecast } from './interface';

@Injectable({
  providedIn: 'root'
})

export class GetWeatherService { 
  constructor(
    private http: HttpClient
  ) { }

  fetchForecast(city: string): Observable<Forecast> {
    return this.http.get<Forecast>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a34fcc171dc45409dcb4d2f9202914ff`)
      .pipe(
        catchError(error => {
          console.log('Error: ', error.message);
          return throwError(error);
        })
      )
  }
}
