import { Location, WeatherForecast } from "./Database"
import { format } from "date-fns";
import Link from "next/link";


export function LocationCard(prop: any) {
    const place: Location = prop.locations;
    const today: Date = new Date();
    
    return (
        <>
        <Link href={place.country +"/"+ place.city}>
        
        <div className="text-white border bg-transparent hover:-translate-y-1 hover:scale-109 hover:border-teal-200 hover:border-2 pb-6 pl-6 mb-7 rounded-lg backdrop-blur-sm">
            <div>{place.country} </div>
            <div className="align">
                {place.weatherForecastList?.find((els: WeatherForecast) => {
                    return els.date.toISOString().split('T')[0] == today.toISOString().split('T')[0]
                })?.temperature}  
            </div>
        </div>
        </Link>
        </>
    )}

    // https://stackoverflow.com/questions/2013255/how-to-get-year-month-day-from-a-date-object
    // bg-red-100
    // bg-rose-100
    // bg-orange-100
    // bg-amber-100
    // bg-lime-100
    // bg-green-100
    // bg-cyan-100
    // bg-purple-100
    // bg-pink-100