
import SignUpForm from '@/sections/auth/SignUpForm';
import Link from 'next/link';
import React from 'react';
import { PageProps } from '../../../../.next/types/app/layout';

const SignUpPage = ({searchParams}:PageProps) => {
  
  return (
    <div>
      <div className="mb-5">
        <h1 className="text text-4xl font-bold ">Get Started</h1>
        <p>Create your account from here</p>
      </div>
      <SignUpForm  redirect_url={searchParams.redirect_url}/>
      <div className="mt-2 text-[1.2rem]">
        <p className="text-center">
          {' '}
          Have an account ?{' '}
          <Link className=" text-info-color font-bold" href="/sign-in">
            Sign in
          </Link>
        </p>
        <Link
          href="/auth/forget-password"
          className="text-primary-color   border-gray-200"
        >
          Forget Password ?
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
