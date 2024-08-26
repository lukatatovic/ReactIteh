import { FiInfo,FiLogOut, FiSettings } from 'react-icons/fi';
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
    key: 'aboutus',
    label: 'About us',
    icon: <FiInfo />,
  },
  {
    key: 'logout',
    label: 'Logout',
    icon: <FiLogOut />,
  },
];

export const trips = [
  {
    id: 1,
    destination: 'Barcelona',
    country: 'Spain',
    city: 'Barcelona',
    startDate: '2024-15-07',
    endDate: '2024-22-07',
    totalCost: 1789.55,
    myCost: 499.12,
  },
  {
    id: 2,
    destination: 'Paris',
    country: 'France',
    city: 'Paris',
    startDate: '2024-30-07',
    endDate: '2024-06-08',
    totalCost: 2789.55,
    myCost: 799.12,
  },
  {
    id: 3,
    destination: 'Rome',
    country: 'Italy',
    city: 'Rome',
    startDate: '2024-14-10',
    endDate: '2024-30-10',
    totalCost: 2229.41,
    myCost: 600.99,
  },
  {
    id: 4,
    destination: 'London',
    country: 'United Kingdom',
    city: 'London',
    startDate: '2024-01-09',
    endDate: '2024-10-09',
    totalCost: 3200.0,
    myCost: 900.5,
  },
  {
    id: 5,
    destination: 'Berlin',
    country: 'Germany',
    city: 'Berlin',
    startDate: '2024-20-11',
    endDate: '2024-30-11',
    totalCost: 1980.75,
    myCost: 550.25,
  },
  {
    id: 6,
    destination: 'Amsterdam',
    country: 'Netherlands',
    city: 'Amsterdam',
    startDate: '2024-05-12',
    endDate: '2024-12-12',
    totalCost: 2450.0,
    myCost: 750.0,
  },
  {
    id: 7,
    destination: 'Prague',
    country: 'Czech Republic',
    city: 'Prague',
    startDate: '2024-17-08',
    endDate: '2024-25-08',
    totalCost: 2100.35,
    myCost: 670.8,
  },
  {
    id: 8,
    destination: 'Vienna',
    country: 'Austria',
    city: 'Vienna',
    startDate: '2024-08-10',
    endDate: '2024-16-10',
    totalCost: 2200.6,
    myCost: 690.5,
  },
  {
    id: 9,
    destination: 'Lisbon',
    country: 'Portugal',
    city: 'Lisbon',
    startDate: '2024-25-09',
    endDate: '2024-03-10',
    totalCost: 1900.45,
    myCost: 610.2,
  },
  {
    id: 10,
    destination: 'Madrid',
    country: 'Spain',
    city: 'Madrid',
    startDate: '2024-10-07',
    endDate: '2024-18-07',
    totalCost: 2000.0,
    myCost: 650.0,
  },
];