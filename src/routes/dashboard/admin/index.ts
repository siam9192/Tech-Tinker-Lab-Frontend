import { CiViewBoard } from 'react-icons/ci';
import { FaUsers } from 'react-icons/fa';
import { IoAlbumsOutline } from 'react-icons/io5';
import { LuActivity } from 'react-icons/lu';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const AdminDashboardRoutes = [
  {
    title: 'Overview',
    href: '/dashboard/admin',
    icon: CiViewBoard,
  },
  {
    title: 'Manage Posts',
    href: '/dashboard/admin/manage-posts',
    icon: MdOutlineDashboardCustomize,
  },
  {
    title: 'Payments',
    href: '/dashboard/admin/payments',
    icon: RiMoneyDollarCircleLine,
  },
  {
    title: 'Manage Users',
    href: '/dashboard/admin/manage-users',
    icon: FaUsers,
  },
  {
    title: 'Users Activities',
    href: '/dashboard/admin/user-activities',
    icon: LuActivity,
  },
  {
    title: 'My Posts',
    href: '/dashboard/admin/my-posts',
    icon:  IoAlbumsOutline,
  }
];

export default AdminDashboardRoutes;
