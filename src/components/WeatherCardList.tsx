import { Weather } from "./Database";
import { WeatherCard } from "./WeatherCard";

const itemList: Weather[] = 
    [
        {icon: 'https://icon-library.com/images/weather-icon-gif/weather-icon-gif-4.jpg',
        date: new Date(),
        temperature: 28.5},
        {icon: 'https://icon-library.com/images/weather-icon-gif/weather-icon-gif-3.jpg',
        date: new Date(),
        temperature: 20.5},
        {icon: 'https://icon-library.com/images/weather-icon-gif/weather-icon-gif-2.jpg',
        date: new Date(),
        temperature: 24.5}        
    ]
    

export function WeatherCardList() {
    const itemHTMLList = itemList.map((item, index) => {
    
    return (
        <>
        <li key={index}>
            <WeatherCard day={item}/>
        </li>
        </>
    )
    }) 

    return(
        <>
        <ul>
            {itemHTMLList}
        </ul>
        </>
    )


}