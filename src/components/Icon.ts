import { faCloudSun,
    faUmbrella,
    faSnowflake,
    faTemperatureHalf,
    faCloud,
    faSun,
    faTornado,
    faWind, 
    faGhost,
    IconDefinition} from "@fortawesome/free-solid-svg-icons";

    
const iconsDict: { [key: string]: IconDefinition } = {
    sunny: faSun,
    cloudy: faCloud,
    tornado: faTornado,
    windy: faWind,
    rainy: faUmbrella,
    snowy: faSnowflake,
    hot: faTemperatureHalf,
    partiallycloudy: faCloudSun
}


// export const GetIcons = (key: string) => iconsDict[key] ?? faGhost;

export function GetIcon(key: string): IconDefinition {
    return iconsDict[key] ?? faGhost
}