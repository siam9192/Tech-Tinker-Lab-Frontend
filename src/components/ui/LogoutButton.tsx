'use client';
import { userLogout } from '@/services/authService';
import React from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
interface ILogoutButtonProps {
  successFn?: () => void;
}
function LogoutButton({ successFn }: ILogoutButtonProps) {
  const logout = async () => {
    await userLogout();
    if (successFn) {
      successFn();
    }
  };
  return (
    <button
      onClick={logout}
      className="text-3xl  text-black p-3 bg-[#fc927d] rounded-full"
    >
      <BiLogOutCircle />
    </button>
  );
}

export default LogoutButton;
