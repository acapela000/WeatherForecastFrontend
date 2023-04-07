'use client';
import { GetCurrentLocation } from '@/lib/location/GetCurrentLocation';
import { LocationCard } from '@/components/LocationCard';
import { WeatherCardList } from '@/components/WeatherCardList';
import { Location } from '@/components/Database';


export default function Home() {

  const thisLocation: Location = {
    name: 'Luxomi',
    state: 'Dubini',
    city: 'Araba',
    country: 'PARIS',
    weatherForecastList: []
  }

return (
    <>
    <div className='p-5 rounded-lg '>
      <h1 className='text font-serif'> 
        <LocationCard locations={thisLocation}/>
      </h1>

      {/* <h1 className='text-xl border-none border-collapse'> 
        <WeatherCard day={today}/>
      </h1> */}
      
      <h1 className='text font-serif'>
        <WeatherCardList/>
      </h1>

    </div>
    </>
  )
}
