'use client';
import { useState, useEffect } from 'react';

import { LocationCardList } from '@/components/LocationCardList';
import { SearchBar } from '@/components/SearchBar';
import { LocationCard } from '@/components/LocationCard';
import { Location } from '@/components/Database';
import { GetLocationById } from '@/lib/GetById';
import { GetLocationByCountryAndCity } from '@/lib/Search';
import { MainCardSkelaton } from '@/components/MainCardSkelaton';

//generate custom geoip model
interface GeoIP {
  ip: string;
  country: string;
}

export default function Home(props: any) {
  const [locationList, setLocationList] = useState<Location[]>([]);
  const [geoIP, setGeoIP] = useState({ip: '', country: ''});

  useEffect(() => {
    //API call
    GetLocationByCountryAndCity()
    .then((response) => setLocationList(response));
    //geoip api
    fetch('https://geolocation-db.com/json/')
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json() as Promise<{IPv4: string, "country_name": string}>
    })
    .then((json) => {
      const currentGeoIP: GeoIP = {ip: json.IPv4, country: json.country_name}
      setGeoIP(currentGeoIP)
      return currentGeoIP;
    })
    .catch((err) => console.log(err));
  }, []);

  const thisLocation: Location = {
        name: 'Luxomi',
        state: 'Dubini',
        city: props.params.city,
        country: props.params.country,
        weatherForecastList: []
  }

  const locationListHTML = 
  locationList.map((item) => {
    return (
      <div key={item.name}>
        <p>{item.country}</p>
        <p>{item.name}</p>
        <p>{item.city}</p>
        <p>{item.state}</p>
      </div>
    )
  })

const successCallback = (position: any) => {
  console.log(position);
};

const errorCallback = (error: any) => {
  console.log(error);
};

//navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
// const id = navigator.geolocation.watchPosition(successCallback, errorCallback);
// const options = {
//   enableHighAccuracy: true,
//   timeout: 10000,
// };

// navigator.geolocation.getCurrentPosition(
//   successCallback,
//   errorCallback,
//   options
// ); 


return (
    <>
    <div>
      {geoIP.country}
      {geoIP.ip}

      {locationList.length==0 && <MainCardSkelaton/>}
      {/*simplize step by step*/}
      {/*locationList[0].city.toString()*/}
      {locationListHTML}
    <h1 className='text-xl'> 
      <LocationCard locations={thisLocation}/>
    </h1>

    </div>
    </>
  )
}
