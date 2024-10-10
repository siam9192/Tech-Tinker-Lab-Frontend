'use client'
import Form from '@/components/form/Form'
import FormInput from '@/components/form/FormInput'
import { changeAccountPassword } from '@/services/userService'
import { successToast } from '@/utils/toast'
import { ZodValidations } from '@/utils/zodValidationSchame'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { toast } from 'sonner'

function page() {
    const [error,setError] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const handleSubmit = async(values:FieldValues)=>{
        setError('')
       if( values.new_password !==values.confirm_password){
        return setError('Both Password Dos not match')
       }
        setIsLoading(true)
       try {
        const data = {current_password:values.current_password,new_password:values.new_password}
       await  changeAccountPassword(data)
       successToast('Password Changed successfully')
       return true
       } catch (error:any) {
        setError(error.message)
       }
       setIsLoading(false)
    }
  return (
   <div className='flex  justify-center items-center h-[90vh]'>
      
     <div className=' w-full md:w-1/2 mx-auto shadow-primary-cu p-10'>
     <h1 className="text-4xl dark:text-white font-medium mb-5">Change Password</h1>
        <Form reset resolver={zodResolver(ZodValidations.changePasswordValidation)} onSubmit={handleSubmit} className='space-y-5'>
            <FormInput name='current_password' placeholder='Current Password'/>
            <FormInput name='new_password' placeholder='New Password'/>
            <FormInput name='confirm_password' placeholder='Confirm Password'/>
         <div>
         <button disabled={isLoading} className='w-full py-3  bg-primary-color text-white rounded-lg'>{
                isLoading ? 'Just a moment..': 'Change Password'}</button>
                {
                    error && <p className='mt-2 text-red-600'>{error}</p>
                }
         </div>
        </Form> 
    </div>
   </div>
  )
}

export default page