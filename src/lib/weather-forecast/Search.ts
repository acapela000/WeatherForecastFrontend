import { Location, WeatherForecast } from "@/components/Database";
import { json } from "stream/consumers";

function getLocationBySearch<T>(endpoint: string, key: string, urlSearchParam: URLSearchParams): Promise<T[]> {
    const url = `${process.env.API}${endpoint}?${urlSearchParam.toString()}`;
    
    return fetch(url)
    .then((response: Response): Promise<any> => {
        if (!response.ok) {
            throw new Error();
        }
        return response.json() as Promise<{_embedded: any}>;
    })
    .then((json: any): Promise<any> => {
        return json._embedded as Promise<{ [key: string]: T[] }>;
    }) 
    .then((insideEmbedded: any): Promise<T[]> => {
        return insideEmbedded[key];
    })
    .catch ((error: any): any => {
        console.log(error);
        return [];
    })
}

export function GetLocationByCountryAndCity(country: string, city: string): Promise<Location[]> {
    const urlSearchParam: URLSearchParams = new URLSearchParams({
        country: country.toString(),
        city: city.toString()
    });
    return getLocationBySearch<Location> ("location/search/country-city", "locationList", urlSearchParam);
}

export function GetLocationByName(param: string, query: string): Promise<Location[]> {
    const urlSearchParam: URLSearchParams = new URLSearchParams({
        [query]: param.toString()
    });
    return getLocationBySearch<Location> (`location/search/${query}`, "locationList", urlSearchParam);
}


export function GetWFByURL(url: string): Promise<WeatherForecast[]> {
    return fetch(url)
    .then((response: Response): Promise<any> => {
        if (!response.ok) {
            throw new Error();
        }
        return response.json() as Promise<{_embedded: any}>;
    })
    .then((json: any): Promise<any> => {
        return json._embedded as Promise<{ wfList: WeatherForecast[] }>;
    }) 
    .then((insideEmbedded: any): Promise<WeatherForecast[]> => {
        return insideEmbedded.wfList;
    })
    .catch ((error: any): any => {
        console.log(error);
        return [];
    })
}