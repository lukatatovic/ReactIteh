import React, { useEffect, useState } from 'react';

import { trips } from '../../utils/constants';
import TripCard from './dashboard-reusable/TripCard';

const Trips = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesArray, setPagesArray] = useState([]);

  useEffect(() => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(trips?.length / 8); i++) {
      pages.push(i);
    }
    setPagesArray(pages);
    setCurrentPage(1);
  }, []);

  return (
    <div className='w-full'>
      <div className='flex justify-between w-full'>
        <h2 className='text-3xl font-bold p-2'>Trips</h2>
        <div className='pagination'>
          {pagesArray.map((page) => (
            <p
              key={page}
              className={`pagination-box ${
                page === currentPage && 'pagination-active'
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </p>
          ))}
        </div>
      </div>

      <div className='flex flex-row flex-wrap gap-4'>
        {trips.slice(currentPage * 8 - 8, currentPage * 8).map((trip, idx) => (
          <TripCard key={idx} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default Trips;