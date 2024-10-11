import { IRoute } from '@/types/global.type';
import { FaHeadset, FaUser, FaUsers } from 'react-icons/fa';
import { HiMiniHome } from 'react-icons/hi2';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FcAbout } from "react-icons/fc";
const UserRoutes: IRoute[] = [
  {
    title: 'Home',
    href: '/',
    icon: HiMiniHome,
  },
  {
    title: 'Following',
    href: '/following',
    icon: FaUsers,
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: FaUser,
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LuLayoutDashboard,
  },
  {
    title: 'About Us',
    href: '/about-us',
    icon: FcAbout,
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
    icon: FaHeadset,
  },
];

export default UserRoutes;
