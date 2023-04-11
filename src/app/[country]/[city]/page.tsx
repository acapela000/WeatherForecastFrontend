'use client';
import { LocationCard } from '@/components/LocationCard';
import { WeatherCardList } from '@/components/WeatherCardList';
import { Location } from '@/components/Database';
import { useState, useEffect } from 'react';
import { GetLocationByCountryAndCity } from '@/lib/weather-forecast/Search';


export default function Home(props: any) {
const searchCountry: string = props.params.country
const searchCity: string = props.params.city


  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    GetLocationByCountryAndCity(searchCountry, searchCity)
      .then((res) => {
        console.log(res)
        if (res.length > 0) {
          const thisLocation: Location = res[0];
          setLocation(thisLocation);
        }
      })
  }, []);


  return (
    <>
      <div className='p-5 rounded-lg '>
        <h1 className='text font-serif'>
          {location != null && <LocationCard location={location}/>}
          
        </h1>

      </div>
      <div className='text font-serif'>
      {location != null && <WeatherCardList wf={location.weatherForecastList}/>}
      </div>

    </>
  )
}
