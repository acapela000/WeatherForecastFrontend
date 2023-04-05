import { Location } from "./Database";
import { LocationCard } from "./LocationCard";
import { WeatherCard } from "./WeatherCard";
import { WeatherCardList } from "./WeatherCardList";

const placeList: Location[] = 
    [
        {name: 'Luxomi',
        state: 'Dubini',
        city: 'Araba',
        country: 'Norway',
        weatherForecastList: []},
        {name: 'Luxomi',
        state: 'Dubini',
        city: 'Araba',
        country: 'Geogia',
        weatherForecastList: [
            {icon: 'https://icon-library.com/images/weather-icon-gif/weather-icon-gif-4.jpg',
            date: new Date(),
            temperature: 28.5,
            condition:'hot',
            isPrecipitating: false,
            humidity: 0.7}
        ]},
        {name: 'Luxomi',
        state: 'Dubini',
        city: 'Araba',
        country: 'Findland',
        weatherForecastList: []},
        {name: 'Melbourn',
        state: 'Perth',
        city: 'Sydney',
        country: 'Australia',
        weatherForecastList: []},
        {name: 'Honolulu',
        state: 'Dubini',
        city: 'Araba',
        country: 'Hungary',
        weatherForecastList: []},
        {name: 'Macao',
        state: 'Dubini',
        city: 'Araba',
        country: 'Ireland',
        weatherForecastList: []}       
    ]
    

export function LocationCardList() {
    // const itemHTMLList = itemList.map((item, index) => {
    
    // return (
    //     <>
    //     <li key={item.icon}>
    //         <WeatherCard day={item}/>
    //     </li>
    //     </>
    // )
    // }) 

    const placeHTMLList = [];
    for(var place of placeList) {
        placeHTMLList.push(
            <LocationCard key={place.city} locations={place}/>
            )
            
            
        }
        WeatherCardList();
        
    //     const itemHTMLList = [];
    //     <WeatherCard key={item.condition} nationality={placeCondition}/>
    //     for(var item of itemList) {
    //         itemHTMLList.push(
    //     )
    // }

    return(
        <>
        <div className="p-5 rounded-lg ">
        {placeHTMLList}
        </div>
        </>
    )
}