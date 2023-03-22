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
        <div className="max-w-screen-xl justify-center items-center text-center flex">
            <form onSubmit={handleSubmit(formData => console.log(formData))} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    {/* <label className="block text-gray-700 text-sm font-bold mb-2"> </label> */}
                    <input {...register('query', validation)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    {errors.query && <p>Please fill the search bar!</p>}
                </div>
                
                <div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Search</button>
                </div>
            </form>
      </div>
        </>
    )
}