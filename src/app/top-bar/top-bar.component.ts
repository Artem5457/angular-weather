import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Output() searchCityWeather: EventEmitter<string> = new EventEmitter<string>();
  city!: string;

  constructor() { }

  findForecast() {
    this.searchCityWeather.emit(this.city);
    this.city = '';
  }

  onKeyUp(event: KeyboardEvent) {
    if (this.city && this.city.trim().length > 0 && event.keyCode === 13) {
      this.searchCityWeather.emit(this.city);
      this.city = '';
    }
  }
}
