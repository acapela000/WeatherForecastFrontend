import { WeatherForecast } from "./Database"
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetIcon } from './Icon';


export function WeatherCard(prop: any) {
    const item: WeatherForecast = prop.day;
    const date: string = format(item.date, "LLLL dd");
    const dayOfWeek: string = format(item.date, "EEEE")
    // const themeCSS: any = {
    //     bg: item.isPrecipitating ? 'b-gray-400 bg-gray-900' : 'bg-white',
    //     fg: item.isPrecipitating ? 'text-amber-500' : 'text-cyan-500',
    //     fgLight: item.isPrecipitating ? 'text-amber-500' : 'text-cyan-400'
    // }
    
    return (
        <>
        <div className="bg-transparent w-16 md:mr-20 mb-10 transition duration-500 ease-in-out transform rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6">
        <div className="text-md font-bold flex flex-col bg-transparent">
            <span className="uppercase">{dayOfWeek}</span> 
            <span className="font-normal text-sm bg-none">{date}</span>
        </div>

        <FontAwesomeIcon icon={GetIcon(item.condition)}
        className="bg-transparent hover:shrink-3 w-20 h-20 text-md flex-2 items-center justify-center"/>

        <p className="bg-transparent mb-2">{item.condition}-{item.humidity}</p>
        <div className="bg-transparent text-3xl font-bold mb-6" >{item.temperature}°C</div>
        </div>
        </>
    )

}