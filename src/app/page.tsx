'use client';
import { SearchBar } from '@/components/SearchBar';
import { LocationCardList } from '@/components/LocationCardList';
import { GetCurrentLocation } from '@/lib/location/GetCurrentLocation';

export default function Home() {

  return (
    <>
    <div >

    <h1 className='text font-serif'> 
      <SearchBar/>
    </h1>
    
    <h1 className='text-xl font-serif'>
      <GetCurrentLocation/>
    </h1>
  
    <h1 className='text-xl font-serif'>
      <LocationCardList/>
    </h1>
    </div>
    </>
  )}

