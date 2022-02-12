import { Component, Input } from '@angular/core';
import { Forecast } from '../shared/interface';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  @Input() forecast!: Forecast;
  @Input() error!: string;

  constructor() {

  }
}

