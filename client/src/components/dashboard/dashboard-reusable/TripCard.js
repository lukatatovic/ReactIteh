import React from 'react';

import TripImg from '../../../assets/trip.jpg';
import { formatDateNoTime } from '../../../utils/date';

const TripCard = ({ trip }) => {
  return (
    <div className='bg-white rounded-md w-96'>
      <img
        src={trip.image || TripImg}
        alt={'trip'}
        className='rounded-md rounded-b-none w-96 h-60'
      />
      <div className='my-2 p-4'>
        <h2 className='font-semibold'>{trip.title}</h2>
        <p className='text-sm mt-1'>{trip.destination}</p>
        <p className='text-xs mt-1'>
          Start Date: {formatDateNoTime(trip.startDate)}
        </p>
        <p className='text-xs mt-1'>
          End Date: {formatDateNoTime(trip.endDate)}
        </p>
        <div className='flex flex-row gap-2 text-xs mt-2 text-neutral-500'>
          <p>
            <span>Total Cost: </span>
            <span className='font-bold'>$0</span>
          </p>
            <p>
              <span>My Cost: </span>
              <span className='font-bold'>$0</span>
            </p>
        </div>
          </div>
      </div>
  );
};

export default TripCard;

