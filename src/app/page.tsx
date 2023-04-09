'use client';
import { SearchBar } from '@/components/SearchBar';
import { LocationCardList } from '@/components/LocationCardList';
import { CurrentLocation } from '@/components/CurrentLocation';

export default function Home() {

  return (
    <>
      <div >

        <h1 className='text font-serif'>
          <SearchBar />
        </h1>

        <h1 className='text-xl font-serif'>
          <CurrentLocation />
        </h1>

        <h1 className='text-xl font-serif'>
          <LocationCardList />
        </h1>
      </div>
    </>
  )
}

