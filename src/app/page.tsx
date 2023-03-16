import { WeatherCardList } from '@/components/WeatherCardList';
import { SearchBar } from '@/components/SearchBar';


export default function Home() {
  return (
    <>
    <SearchBar/>
    
    <h1 className='text-2xl'>
      <WeatherCardList/>
      </h1>
    </>
  )
}
