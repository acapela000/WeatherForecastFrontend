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
        <form onSubmit={handleSubmit(formData => console.log(formData))}>
            <input {...register('query', validation)} />
            <input type="submit"/>

            {errors.query && <p>Please fill the search bar.</p>}
        </form>
        
        </>
    )
}