import Link from 'next/link';
import React from 'react';
import { AiOutlineLogin } from 'react-icons/ai';

function SignInButton() {
  return (
    <Link href="/auth/sign-in" className="block">
      <button className="text-3xl text-black p-3 bg-[#fc927d] rounded-full flex items-center gap-2">
        <AiOutlineLogin />
        <span className='text-xl font-medium'>Sign in</span>
      </button>
    </Link>
  );
}

export default SignInButton;
