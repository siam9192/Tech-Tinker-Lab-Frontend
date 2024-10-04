'use client';
import Form from '@/components/form/Form';
import FormInputWithIcon from '@/components/form/FormInputWithIcon';
import SuccessPopup from '@/components/popup/SuccessPopup';
import { useSignInMutation } from '@/redux/api/auth.api';
import { setUser } from '@/redux/features/auth.slice';
import { toggleLoadingLineComponent } from '@/redux/features/toggle.slice';
import { ZodValidations } from '@/utils/zodValidationSchame';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { FieldValues} from 'react-hook-form'
import { BiLock} from 'react-icons/bi';
import { CiMail } from 'react-icons/ci'
import { useDispatch } from 'react-redux';

function SignInForm() {
  const [error,setError] = useState('')
  const [isOpenSuccessPopup,setIsOpenSuccessPop] = useState(false)

  const dispatch = useDispatch()
    
  const [signIn] = useSignInMutation()

    const handelSubmit = async(values:FieldValues)=>{
     
      // Reset error message
      setError('')
      

      // Checking is password match with confirm_password
     if(values.password !== values.confirm_password){
      return  setError('Both password dose not match')
     }
     dispatch(toggleLoadingLineComponent(true))
     const res = await signIn(values)
    
     if(!res.data.success){
       return setError(res.data.message)
     }

     const data = res?.data?.data

     const accessToken = data.accessToken
     const refreshToken = data.refreshTone 
     dispatch(setUser(
         {
             accessToken,
             refreshToken
         }
     ))
     dispatch(toggleLoadingLineComponent(true))
     return true
    }
  
    function closeSuccessPopup  (){
      setIsOpenSuccessPop(false)
    }
    
    function openSuccessPopup (){
      setIsOpenSuccessPop(true)
    }
  return (
 <>
   <Form  reset={true} onSubmit={handelSubmit} resolver={zodResolver(ZodValidations.signUpValidation)} className='space-y-10'>
   <FormInputWithIcon icon={CiMail} name='email' placeholder='Email'/>
   <FormInputWithIcon icon={BiLock} name='password' type='password' placeholder='Password'/>
 <div className='mt-2'>
 <button type='submit' className='w-full py-3 bg-button-color text-xl text-white rounded-lg'>Sign In  Now</button>
   {
    error && <p className='text-red-500'>{error}</p>
   }
 </div>
 
   </Form>
   <SuccessPopup isOpen={isOpenSuccessPopup} closeFn={closeSuccessPopup}/>
   
 </>
  
  )
}

export default SignInForm