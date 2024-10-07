import { IRoute } from '@/types/global.type';
import { FaUser, FaUsers } from 'react-icons/fa';
import { HiMiniHome } from 'react-icons/hi2';
import { LuLayoutDashboard } from 'react-icons/lu';

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
];

export default UserRoutes;
