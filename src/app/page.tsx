'use client';
import { useState, useEffect } from 'react';

import { WeatherCardList } from '@/components/WeatherCardList';
import { SearchBar } from '@/components/SearchBar';
import { WeatherCard } from '@/components/WeatherCard';
import { WeatherForecast } from '@/components/Database';
import { Location } from '@/components/Database';
import { GetLocationById } from '@/lib/GetById';


export default function Home() {
  const [location, setLocation] = useState<Location|null>(null);
  useEffect(() => {
    //API call
    const id: string = "2ae0ce5e-c8f5-4792-a44e-9139df0fcc04";
    GetLocationById(id).then((response) => setLocation(response));
  }, []);

  const today: WeatherForecast = {
        icon: 'https://icon-library.com/images/weather-icon-gif/weather-icon-gif-4.jpg',
        date: new Date(),
        temperature: 28.5,
        condition:'hot',
        isPrecipitating: false,
        humidity: 0.7
  }

  if (location == null) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <>
    <div>
      {location.name}
      {location.state}
      {location.city}
      {location.country}

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
