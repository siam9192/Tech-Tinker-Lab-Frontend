import { CiViewBoard } from 'react-icons/ci';
import { IoAlbumsOutline } from 'react-icons/io5';
import { PiPackageFill } from 'react-icons/pi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const UserDashboardRoutes = [
  {
    title: 'Overview',
    href: '/dashboard/user',
    icon: CiViewBoard,
  },
  {
    title: 'My Posts',
    href: '/dashboard/user/my-posts',
    icon: IoAlbumsOutline,
  },
  {
    title: 'Payment History',
    href: '/dashboard/user/payment-history',
    icon: RiMoneyDollarCircleLine,
  },
  {
    title: 'Subscription',
    href: '/dashboard/user/my-subscription',
    icon: PiPackageFill,
  },
];

export default UserDashboardRoutes;
