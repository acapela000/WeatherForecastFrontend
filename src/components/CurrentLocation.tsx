'use client';
import { Location } from "@/components/Database";
import { GetLocationByCountryAndCity } from '@/lib/weather-forecast/Search';
import { useState, useEffect } from 'react';
import { MainCardSkelaton } from '@/components/MainCardSkelaton';
import { GetCurrentLocation } from "@/lib/location/GetCurrentLocation";
import { LocationCard } from '@/components/LocationCard';


export function CurrentLocation() {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {

    //geoip api
    GetCurrentLocation()
      .then((dataLocation) => {
        //API call
        GetLocationByCountryAndCity(dataLocation.country, dataLocation.city)
          .then((response) => {
            if (response.length > 0) {
              setLocation(response[0])
            }
          });
      })
  }, []);




  return (
    <>
      <div className='p-5 rounded-lg'>


        {location != null && <LocationCard location={location}/>}

      {/*simplize step by step*/}
      {/*locationList[0].city.toString()*/}
      {/* {locationListHTML} */}
    </div>
    </>
  )
}