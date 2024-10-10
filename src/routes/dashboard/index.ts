import { CgProfile } from 'react-icons/cg';
import { GoHome } from 'react-icons/go';
import { MdLock } from 'react-icons/md';

export const AccountManagementRoutes = (role:string,username:string)=>{
  return [
    {
      title: 'My Profile',
      href: `/profile/${username}`,
      icon: CgProfile,
    },
    {
      title: 'Change Password',
      href: `/dashboard/${role.toLowerCase()}/change-password`,
      icon: MdLock,
    },
    {
      title: 'Go Home',
      href: '/',
      icon: GoHome,
    },
  ];
  
}