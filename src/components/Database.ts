export interface Weather {

    icon: string;
    temperature: number;
    date: Date;

}

export interface WeatherForecast {
    id: string;
    icon: string;
    temperature: number;
    condition: string;
    isPrecipitating: boolean;
    humidity: number;
    date: Date;
    
}