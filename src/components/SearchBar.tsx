'use client'
import { useForm, UseFormReturn } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { RegisterOptions } from 'react-hook-form/dist/types';
import { GetLocationByName } from "@/lib/weather-forecast/Search";
import { Location } from './Database';
import { LocationCardList } from '@/components/LocationCardList';


export function SearchBar() {

    const useFormTmp: UseFormReturn = useForm();
    useFormTmp.register
    useFormTmp.formState.errors

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    const validation: RegisterOptions = {
        required: true,
        pattern: /\w+/
    };

    const [locationError, setLocationError] = useState('');
    const [locationList, setLocationList] = useState<Location[]>([]);
    
    const onSubmit = async (formData: any) => {
        const { query } = formData;
        setLocationError('');

        try {
            const data: Location[] = await GetLocationByName(query, "country"); // remove query parameter from here
            if (data) {
                setLocationList(data);
                // update the CurrentLocation component with the new weather data
            } else {
                setLocationError('Please enter a valid city or country!');
            }
        } catch (error) {
            console.log(error);
            setLocationError('An error occurred while getting the weather data!');
        }
    };


    return (
        <>
            <div className="justify-center items-center text-center pt-40 mb-10 ">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-transparent rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <input {...register('query', validation)} className="bg-transparent shadow appearance-none border rounded w-80 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter city or country" />
                        <button type="submit" className="bg-blue-100 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Search</button>
                        {errors.query?.type === 'required' && <p className="text-red-500">Please fill the search bar!</p>}
                        {locationError && <p className="text-red-500">{locationError}</p>}
                    </div>
                </form>
            </div>
                {locationList.length != 0 && <LocationCardList list={locationList} />}
        </>
    )
}