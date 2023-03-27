import { Location } from "@/components/Database";
import { json } from "stream/consumers";

function getLocationBySearch<T>(endpoint: string, key: string, country: string, city: string): Promise<T[]> {
    const urlSearchParam: URLSearchParams = new URLSearchParams({
        country: country.toString(),
        city: city.toString()
    });
    const url = `http://localhost:8080${endpoint}?${urlSearchParam.toString()}`;

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

export function GetLocationByCountryAndCity(country = 'Japan', city = 'Yokohama') {
    return getLocationBySearch<Location> ("/location/search/country-city", "locationList", country, city);
}