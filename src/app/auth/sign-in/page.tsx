import SignInForm from '@/sections/auth/SignInForm'
import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
  return (
    <div>
          <div className='mb-5 mt-20'>
      <h1 className='text text-4xl font-bold '>Log In</h1>
      <p>Sign In  your registration account from here</p>
      </div>
      <SignInForm/>
      <div className='mt-5 text-[1.2rem] text-center'>
          <p className='text-center'>Don t Have an account ? <Link className=' text-info-color font-bold' href='/auth/sign-up'>Sign up</Link></p>
         <Link href='/auth/forget-password' className='text-primary-color   border-gray-200'>Forget Password ?</Link>
      </div>
    </div>
   
  )
}

export default SignInPage