export interface WeatherForecast {
    //id: string;
    icon: string;
    temperature: number;
    condition: string;
    isPrecipitating: boolean;
    humidity: number;
    date: Date;
}

export interface Role {
    //id: string; // no need now, make more simple
    name: string;
    description: string;
}

export interface User {
    //id: string;
    userName: string;
    password: string;
}

export interface Location {
    //id: string;
    name: string;
    state: string;
    city: string;
    country: string;
    weatherForecastList ?: WeatherForecast[];
}