import { CgProfile } from 'react-icons/cg';
import { GoHome } from 'react-icons/go';
import { MdLock } from 'react-icons/md';

export const AccountManagementRoutes = [
  {
    title: 'My Profile',
    href: `/profile`,
    icon: CgProfile,
  },
  {
    title: 'Change Password',
    href: '/dashboard/change-password',
    icon: MdLock,
  },
  {
    title: 'Go Home',
    href: '/',
    icon: GoHome,
  },
];
