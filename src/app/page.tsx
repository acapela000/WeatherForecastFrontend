import { WeatherCardList } from '@/components/WeatherCardList';
import { SearchBar } from '@/components/SearchBar';
import { getList } from '@/lib/GetList';
import { Role } from '@/components/Database';

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
