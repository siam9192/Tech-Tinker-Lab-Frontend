'use client';
import { userLogout } from '@/services/authService';
import { getActivityInfo } from '@/utils/func';
import React from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
interface ILogoutButtonProps {
  successFn?: () => void;
}
function LogoutButton({ successFn }: ILogoutButtonProps) {
  
  const logout = async () => {
    const activity = await getActivityInfo()
 
    await userLogout(activity);
    if (successFn) {
      successFn();
    }
  };
  return (
    <button
      onClick={logout}
      className="text-3xl  text-black p-3 bg-[#fc927d] rounded-full flex items-center gap-2"
    >
      <BiLogOutCircle />
      <span className='text-black text-xl font-medium'>Logout</span>
    </button>
  );
}

export default LogoutButton;
