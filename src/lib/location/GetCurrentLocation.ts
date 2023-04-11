import { GetCountryName } from "@/lib/location/GetCountryName";


//generate custom geoip model
export interface GeoIP {
    country: string;
    city: string;
    state: string
}


export async function GetCurrentLocation(): Promise<GeoIP> {
    return fetch(`https://ipinfo.io/json?token=${process.env.LOCATION_TOKEN}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json() as Promise<{ "country": string, "city": string, "region": string }>
        })
        .then((json) => {
            const currentGeoIP: GeoIP = {
                country: GetCountryName(json.country),
                city: json.city,
                state: json.region
            }
            return currentGeoIP;
            
        })
        .catch((err) => {
            console.log(err)
            return {country: '', city: '', state: ''};
        });
}