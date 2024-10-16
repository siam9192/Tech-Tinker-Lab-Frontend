
import Link from 'next/link';
import React from 'react';
import { PageProps } from '../../../../.next/types/app/layout';
import dynamic from 'next/dynamic';

const SignInForm  = dynamic(()=>import('@/sections/auth/SignInForm'),{ssr:false})

const SignInPage = ({ searchParams }: PageProps) => {
  
  return (
    <div>
      <div className="mb-5 mt-20 dark:text-white">
        <h1 className="text text-4xl font-bold ">Log In</h1>
        <p>Sign In your registered account from here</p>
      </div>
      <SignInForm redirect_url={searchParams.redirect} />
      <div className="mt-5 text-[1.2rem] text-center">
        <p className="text-center dark:text-white">
          Don t Have an account ?{' '}
          <Link className=" text-info-color  font-bold" href="/auth/sign-up">
            Sign up
          </Link>
        </p>
        <Link
          href="/auth/forget-password"
          className="text-primary-color   border-gray-200 "
        >
          Forget Password ?
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
