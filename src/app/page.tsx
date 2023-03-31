'use client';
import { useState, useEffect } from 'react';

import { WeatherCardList } from '@/components/WeatherCardList';
import { SearchBar } from '@/components/SearchBar';
import { WeatherCard } from '@/components/WeatherCard';
import { WeatherForecast } from '@/components/Database';
import { Location } from '@/components/Database';
import { GetLocationById } from '@/lib/GetById';
import { GetLocationByCountryAndCity } from './../lib/Search';
import { MainCardSkelaton } from '@/components/MainCardSkelaton';

//generate custom geoip model
interface GeoIP {
  ip: string;
  country: string;
}

export default function Home() {
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

  const today: WeatherForecast = {
        icon: 'https://icon-library.com/images/weather-icon-gif/weather-icon-gif-4.jpg',
        date: new Date(),
        temperature: 28.5,
        condition:'hot',
        isPrecipitating: false,
        humidity: 0.7
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

      
    <h1 className='text-2xl'> 
      <SearchBar/>
    </h1>
    
    <h1 className='text-2xl'> 
      <WeatherCard day={today}/>
    </h1>
    
    <h1 className='text-2xl'>
      <WeatherCardList/>
    </h1>

  
    </div>
    
    
    </>
  )
}
