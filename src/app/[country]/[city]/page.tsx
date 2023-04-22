'use client';
import { LocationCard } from '@/components/LocationCard';
import { WeatherCardList } from '@/components/WeatherCardList';
import { Location, WeatherForecast } from '@/components/Database';
import { useState, useEffect } from 'react';
import { GetLocationByCountryAndCity, GetWFByURL } from '@/lib/weather-forecast/Search';


export default function Home(props: any) {
const searchCountry: string = decodeURIComponent(props.params.country);
const searchCity: string = decodeURIComponent(props.params.city);

  const [location, setLocation] = useState<Location | null>(null);
  const [weatherForecastList, setWeatherForecastList] = useState<WeatherForecast[]>([]);

  useEffect(() => {
    GetLocationByCountryAndCity(searchCountry, searchCity)
      .then((res) => {
        if (res.length > 0) {
          const thisLocation: Location = res[0];
          setLocation(thisLocation);

          // get wfList for thisLocation
          const wfURL: string = thisLocation._links?.weatherForecastList.href || "";
          GetWFByURL(wfURL)
          .then((response) => setWeatherForecastList(response));
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
      {location != null && <WeatherCardList wf={weatherForecastList}/>}
      </div>

    </>
  )
}
