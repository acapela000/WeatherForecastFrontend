'use client';
import { Location } from "@/components/Database";
import { GetLocationByCountryAndCity } from '@/lib/weather-forecast/Search';
import { useState, useEffect } from 'react';
import { MainCardSkelaton } from '@/components/MainCardSkelaton';
import { GetCurrentLocation } from "@/lib/location/GetCurrentLocation";

  
export function CurrentLocation() {
    const [locationList, setLocationList] = useState<Location[]>([]);
    const [geoIP, setGeoIP] = useState({country: '', city: '', state: ''});
  
    useEffect(() => {
      //API call
      GetLocationByCountryAndCity()
      .then((response) => setLocationList(response));
      //geoip api
      GetCurrentLocation()
      .then((dataLocation) => setGeoIP(dataLocation))
    }, []);

    
    
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
    
    return (
        <>
        <div className='p-5 rounded-lg'>
          <div className='text-white bg-transparent md:mr-5 transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer border pb-6 pl-6 mb-7 rounded-lg backdrop-blur-sm'>
            <p> Current Location </p>
            <span>Country: </span>{geoIP.country}<br/>
            <span>City: </span>{geoIP.city}<br/>
            <span>State: </span>{geoIP.state}
          </div>
    
          {/* {locationList.length==0 && <MainCardSkelaton/>} */}
    
          {/*simplize step by step*/}
          {/*locationList[0].city.toString()*/}
          {/* {locationListHTML} */}
        </div>
        </>
    )}