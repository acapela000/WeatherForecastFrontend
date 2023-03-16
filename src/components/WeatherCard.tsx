import { WeatherForecast } from "./Database"
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";


export function WeatherCard(prop: any) {
    const item: WeatherForecast = prop.day;
    const date: string = format(item.date, "LLLL dd");
    const dayOfWeek: string = format(item.date, "EEEE")
    const themeCSS: any = {
        bg: item.isPrecipitating ? 'b-gray-400 bg-gray-900' : 'bg-white',
        fg: item.isPrecipitating ? 'text-amber-500' : 'text-cyan-500',
        fgLight: item.isPrecipitating ? 'text-amber-500' : 'text-cyan-400'
    }
    
    return (
        <>
        <div className={themeCSS.bg + ' ' + "w-64 md:mr-20 mb-10 transition duration-500 ease-in-out transform rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6"}>
        <div className={"text-md font-bold flex flex-col" + ' ' + themeCSS.fg}>
            <span className="uppercase">{dayOfWeek}</span> 
            <span className={"font-normal text-sm" +' '+ themeCSS.fgLight}>{date}</span>
        </div>
        <div className="w-32 h-32 flex items-center justify-center">
            {/* <img src={item.icon} alt="image" width="95" height="72"/> */}
            <FontAwesomeIcon icon={faCloudSun} className={themeCSS.fg}/>
            {/* <i className="fa-solid fa-clouds-sun"></i> */}
        </div>
        <p className={"mb-2" +' '+ themeCSS.fgLight}>{item.condition}-{item.humidity}</p>
        <div className={themeCSS.fg +' '+ "text-3xl font-bold mb-6"}>{item.temperature}°C</div>
    </div>
        </>
    )

}