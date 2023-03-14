import { Weather } from "./Database"
import { format } from "date-fns";

function RenderData(): Weather {
    return {
        icon: "",
        date: new Date(),
        temperature: 20.5
    }
}

export function WeatherCard() {
    const item: Weather = RenderData();
    const date: string = format(item.date, "LLLL dd");

    return (
        <>
    <div>
        {item.icon} 
        </div>
    <div>
    {date}
        </div>
    <div>
    {item.temperature}
        </div>
        </>
    )

}