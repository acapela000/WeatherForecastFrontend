import { Location } from "./Database";
import { LocationCard } from "./LocationCard";
import { WeatherCard } from "./WeatherCard";
import { WeatherCardList } from "./WeatherCardList";

const placeList: Location[] = [];
    

export function LocationCardList(props: any) {
    const displayList: Location[] = props.list
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
    for(var place of displayList) {
        placeHTMLList.push(
            <LocationCard key={place.name} location={place}/>
            )
            
            
        }
        // WeatherCardList();
        
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