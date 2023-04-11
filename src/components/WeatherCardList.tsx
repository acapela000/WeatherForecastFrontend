import { WeatherForecast } from "./Database";
import { WeatherCard } from "./WeatherCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// const itemList: WeatherForecast[] = 
//     [
//         {
//             icon: '',
//             date: new Date(),
//             temperature: 28.5,
//             condition:'hot',
//             isPrecipitating: false,
//             humidity: 0.7},
//         {
//             icon: 'https://icon-library.com/images/weather-icon-gif/weather-icon-gif-5.jpg',
//             date: new Date(),
//             temperature: 20.5,
//             condition:'snowy',
//             isPrecipitating: true,
//             humidity: 0.8},
//         {
//             icon: 'https://icon-library.com/images/weather-icon-gif/weather-icon-gif-3.jpg',
//             date: new Date(),
//             temperature: 20.5,
//             condition:'windy',
//             isPrecipitating: true,
//             humidity: 0.8},
//         {
//             icon: 'https://icon-library.com/images/weather-icon-gif/weather-icon-gif-3.jpg',
//             date: new Date(),
//             temperature: 20.5,
//             condition:'rainy',
//             isPrecipitating: true,
//             humidity: 0.8},
//         {
//             icon: 'https://icon-library.com/images/weather-icon-gif/weather-icon-gif-4.jpg',
//             date: new Date(),
//             temperature: 20.5,
//             condition:'sunny',
//             isPrecipitating: true,
//             humidity: 0.8},
//         {
//             icon: 'https://icon-library.com/images/weather-icon-gif/weather-icon-gif-1.jpg',
//             date: new Date(),
//             temperature: 20.5,
//             condition:'cloudy',
//             isPrecipitating: true,
//             humidity: 0.8},
//         {
//             icon: 'https://icon-library.com/images/weather-icon-gif/weather-icon-gif-2.jpg',
//             date: new Date(),
//             temperature: 24.5,
//             condition:'tornado',
//             isPrecipitating: false,
//             humidity: 0.9}        
//     ]
    

export function WeatherCardList(props: any) {
    const wfList: WeatherForecast[] = props.wf ?? [];
    // const itemHTMLList = itemList.map((item, index) => {
    
    // return (
    //     <>
    //     <li key={item.icon}>
    //         <WeatherCard day={item}/>
    //     </li>
    //     </>
    // )
    // }) 
    // console.log(itemList)

    const itemHTMLList = [];
    for(var item of wfList) {
        itemHTMLList.push(
        <WeatherCard key={item.icon} day={item}/>
        )
    }
    
    return(
        <>
        <div className="m-8 grid grid-cols-3 xs:grid-cols-2 md:grid-cols-7 gap-5">
        {itemHTMLList}
        </div>
        </>
    )
}