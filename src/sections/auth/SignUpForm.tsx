'use client';
import Form from '@/components/form/Form';
import FormInputWithIcon from '@/components/form/FormInputWithIcon';
import SuccessPopup from '@/components/popup/SuccessPopup';
import { useUserRegistration } from '@/hooks/auth.hook';
import { useSignInMutation, useSignUpMutation } from '@/redux/api/auth.api';
import { setUser } from '@/redux/features/auth.slice';
import { toggleLoadingLineComponent } from '@/redux/features/toggle.slice';
import { useAppDispatch } from '@/redux/hooks';
import { ZodValidations } from '@/utils/zodValidationSchame';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FieldValues} from 'react-hook-form'
import { BiLock} from 'react-icons/bi';
import { CiMail } from 'react-icons/ci'
import { LuUser2 } from 'react-icons/lu';
import Cookies from 'js-cookie'

function SignUpForm() {
  const [error,setError] = useState('')
  const [isOpenSuccessPopup,setIsOpenSuccessPop] = useState(false)
  
  const dispatch = useAppDispatch()
  // const {mutate:signUp,isSuccess,isLoading} = useUserRegistration()

  // useEffect(()=>{
  //   if(isLoading){
  //     openLoadingLine()
  //   }
  //   else {
  //     closeLoadingLine
  //   }
  // },[isLoading])

  const [signUp] = useSignUpMutation()

    const handelSubmit = async(values:FieldValues)=>{
    
      // Reset error message
      setError('')
      
      // Checking is password match with confirm_password
     if(values.password !== values.confirm_password){
      return  setError('Both password dose not match')
     }
     
    //  Open loading

     openLoadingLine()

    //User  Registration data
     const userData  ={
     personal_details:{
      name:values.name
     },
     username:values.username,
     email:values.email,
     password:values.password
     }
     const res = await signUp(userData)
   
     if(!res?.data?.success){
       closeLoadingLine()
       return setError((res.error as any).data.message)
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
    
     Cookies.set("accessToken",accessToken)

    closeLoadingLine()
     
    }
   
   function openLoadingLine (){
    dispatch(toggleLoadingLineComponent(true))
   }  

   function closeLoadingLine(){
    dispatch(toggleLoadingLineComponent(false))
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
   <div className='grid md:grid-cols-2 gap-3'>
   <FormInputWithIcon icon={LuUser2} name='name.first_name' placeholder='First Name'/>
   <FormInputWithIcon icon={LuUser2} name='name.last_name' placeholder='Last Name'/>
    </div>
   <FormInputWithIcon icon={LuUser2} name='username' placeholder='Username'/>
   <FormInputWithIcon icon={CiMail} name='email' placeholder='Email'/>
   <FormInputWithIcon icon={BiLock} name='password' placeholder='Password'/>
   <FormInputWithIcon icon={BiLock} name='confirm_password' placeholder='Confirm Password'/>
 <div className='mt-2'>
 <button type='submit' className='w-full py-3 bg-button-color text-xl text-white rounded-lg'>Sign Up Now</button>
   {
    error && <p className='text-red-500  mt-3'>{error}</p>
   }
 </div>
 
   </Form>
   <SuccessPopup isOpen={isOpenSuccessPopup} closeFn={closeSuccessPopup}/>
 </>
  
  )
}

export default SignUpForm