'use client';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="h-[100vh]   flex justify-center items-center flex-col  p-10 md:py-20 ">
      <img className=" w-1/2 md:w-1/3 hi" src="/images/not-found.png" alt="" />
      <div className="mt-10 text-center">
        <h1 className="text-4xl text-black dark:text-slate-50 font-bold ">
          No Page Available
        </h1>
        <Link href={'/'}>
          <button className="mt-5  px-4 py-2 bg-primary-color text-white ">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
