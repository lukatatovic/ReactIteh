import React, { useEffect, useState } from 'react';
import axios from 'axios';

import tripImg from '../../../assets/trip.jpg';

const TripCard = ({ trip }) => {
  const [image, setImage] = useState(null);
  const fetchImage = false;

  useEffect(() => {
    const getImage = async () => {
      try {
        if (fetchImage) {
          const res = await axios.get(
            `https://api.unsplash.com/photos/random?client_id=JAWLX5tqR51mrkwNozXCTrEHIQ4xTEI1CTnYtKBWGGA&query=${trip.destination}`
          );
          setImage(res.data.urls.full);
        } else {
          setImage(null);
        }
      } catch (error) {
        console.error('Reached the limit for API calls!');
      }
    };

    getImage();
  }, [trip.destination]);

  return (
    <div className='bg-white rounded-md w-96'>
      <img
        src={image || tripImg}
        alt={'trip'}
        className='rounded-md rounded-b-none w-96 h-60'
      />
      <div className='my-2 p-4'>
        <h2 className='font-semibold'>{trip.destination}</h2>
        <p className='text-sm mt-1'>
          {trip.country}, {trip.city}
        </p>
        <p className='text-xs mt-1'>Start Date: {trip.startDate}</p>
        <p className='text-xs mt-1'>End Date: {trip.endDate}</p>
        <div className='flex flex-row gap-2 text-xs mt-2 text-neutral-500'>
          <p>
            <span>Total Cost: </span>
            <span className='font-bold'>${trip.totalCost}</span>
          </p>
          <p>
            <span>My Cost: </span>
            <span className='font-bold'>${trip.myCost}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
