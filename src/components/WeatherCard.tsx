import { Weather } from "./Database"
import { format } from "date-fns";


export function WeatherCard(prop: any) {
    const item: Weather = prop.day;
    const date: string = format(item.date, "LLLL dd");

    return (
        <>
    <div>
     {date} - {item.temperature}°C
    </div>
    <img src={item.icon} alt="imageIcon" width={200} height={200}/>
        </>
    )

}