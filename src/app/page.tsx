import { WeatherCardList } from '@/components/WeatherCardList';
import { SearchBar } from '@/components/SearchBar';

export default function Home() {
  return (
    <>
    <h1 className='text-2xl bg-lime-100'> 
      <SearchBar/>
    </h1>
    
    
    <h1 className='text-2xl bg-cyan-100'>
      <WeatherCardList/>
      </h1>

      <h1>
        <footer className=' bg-lime-100'></footer>
      </h1>
    </>
  )
}
