import Link from 'next/link';
import React from 'react';
import { AiOutlineLogin } from 'react-icons/ai';

function SignInButton() {
  return (
    <Link href="/auth/sign-in" className="block">
      <button className="text-3xl text-white p-3 bg-[#fc927d] rounded-full">
        <AiOutlineLogin />
      </button>
    </Link>
  );
}

export default SignInButton;
