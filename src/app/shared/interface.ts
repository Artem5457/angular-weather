export interface Forecast {
  clouds: {
    all: number;
  };
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  visibility: number;
  weather: [{
    description: string;
    icon: string;
    main: string;
  }];
  wind: {
    deg: number;
    speed: number;
  }
}
