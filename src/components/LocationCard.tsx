import { Location, WeatherForecast } from "./Database"
import { format } from "date-fns";
import Link from "next/link";


export function LocationCard(prop: any) {
    const place: Location = prop.location;
    const today: Date = new Date();
    
    return (
        <>
        <Link href={place.country +"/"+ place.city}>
        
        <div className="mt-10 text-white bg-transparent md:mr-5 transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer border pb-6 pl-6 mb-6 rounded-lg backdrop-blur-sm">
            <div>{place.country}</div>
            <div>{place.city}</div>
            <div>{place.state}</div>
            <div className="">
                {place.weatherForecastList?.find((els: WeatherForecast) => {
                    return els.lastUpdated.toISOString().split('T')[0] == today.toISOString().split('T')[0]
                })?.temperature}  
            </div>
        </div>
        </Link>
        </>
    )}

    // https://stackoverflow.com/questions/2013255/how-to-get-year-month-day-from-a-date-object
  