'use client'
import { useForm, UseFormReturn } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types';

export function SearchBar() {
    /*
    const useFormTmp: UseFormReturn = useForm();
    useFormTmp.register
    useFormTmp.formState.errors
    */
    const {
        handleSubmit,
        register, 
        formState: {errors}
    } = useForm();

    const validation: RegisterOptions = {
        required:true,
        pattern: /\w+/
    }

    return (
        
        <>
        <div className="justify-center items-center text-center flex">
            <form onSubmit={handleSubmit(formData => console.log(formData))} className="bg-none rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    {/* <label className="block text-gray-700 text-sm font-bold mb-2"> </label> */}
                    <input {...register('query', validation)} className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                   <button type="submit" className="bg-blue-100 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Search</button>
                    {errors.query && <p>Please fill the search bar!</p>}
                </div>
                
                <div>
                </div>
            </form>
      </div>
        </>
    )
}