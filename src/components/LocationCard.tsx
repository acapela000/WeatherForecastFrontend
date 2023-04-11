import { Location, WeatherForecast } from "./Database"
import { format } from "date-fns";
import Link from "next/link";


export function LocationCard(prop: any) {
    const place: Location = prop.location;
    const today: Date = new Date();
    
    return (
        <>
        <Link href={place.country +"/"+ place.city}>
        
        <div className="mt-10 text-white bg-transparent md:mr-5 transition duration-500 ease-in-out transform rounded-lg hover:scale-105 cursor-pointer border pb-6 pl-6 mb-6 rounded-lg backdrop-blur-sm">
            <div>{place.country} </div>
            <div className="">
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