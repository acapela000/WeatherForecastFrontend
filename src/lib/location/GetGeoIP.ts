import { GeoIP } from "./GetCurrentLocation";


export function GetGeoIP(): Promise<GeoIP> {

    return fetch('/api/current-place')
    .then((res) => res.json() as Promise<GeoIP>)
}