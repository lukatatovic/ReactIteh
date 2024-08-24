import { FiLogOut, FiSettings } from 'react-icons/fi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { MdTravelExplore } from 'react-icons/md';

export const sidebar_links = [
  {
    key: 'trips',
    label: 'Trips',
    icon: <MdTravelExplore />,
  },
  {
    key: 'transactions',
    label: 'Transactions',
    icon: <RiMoneyDollarCircleLine />,
  },
];

export const sidebar_bottom_links = [
  {
    key: 'settings',
    label: 'Settings',
    icon: <FiSettings />,
  },
  {
    key: 'logout',
    label: 'Logout',
    icon: <FiLogOut />,
  },
];