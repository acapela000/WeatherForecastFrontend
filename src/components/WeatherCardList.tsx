import { WeatherForecast } from "./Database";
import { WeatherCard } from "./WeatherCard";


const itemList: WeatherForecast[] = 
// id: string;
//     icon: string;
//     temperature: number;
//     condition: string;
//     isPrecipitating: boolean;
//     humidity: number;
//     date: Date;
    [
        {id:'',
        icon: 'https://icon-library.com/images/weather-icon-gif/weather-icon-gif-4.jpg',
        date: new Date(),
        temperature: 28.5,
        condition:'sunny',
        isPrecipitating: false,
        humidity: 0.7},
        {id:'',
        icon: 'https://icon-library.com/images/weather-icon-gif/weather-icon-gif-3.jpg',
        date: new Date(),
        temperature: 20.5,
        condition:'rainy',
        isPrecipitating: true,
        humidity: 0.8},
        {id:'',
        icon: 'https://icon-library.com/images/weather-icon-gif/weather-icon-gif-2.jpg',
        date: new Date(),
        temperature: 24.5,
        condition:'windy',
        isPrecipitating: false,
        humidity: 0.9}        
    ]
    

export function WeatherCardList() {
    // const itemHTMLList = itemList.map((item, index) => {
    
    // return (
    //     <>
    //     <li key={item.icon}>
    //         <WeatherCard day={item}/>
    //     </li>
    //     </>
    // )
    // }) 

    const itemHTMLList = [];
    for(var item of itemList) {
        itemHTMLList.push(
        <WeatherCard key={item.icon} day={item}/>
        )
    }

    return(
        <>
        <div className="m-10 items-center flex flex-col md:flex-row md:justify-center">
        {itemHTMLList}
        </div>
        </>
    )


}