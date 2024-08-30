import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useTripStore } from '../../store/tripsStore';
import LoadingSpinner from '../shared/LoadingSpinner';
import MotionButton from '../shared/MotionButton';
import TripCard from './dashboard-reusable/TripCard';

const Trips = () => {
  const [trips, setTrips] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { getTrips, error, isLoading } = useTripStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      const response = await getTrips({
        startIndex: '',
        limit: '8',
        order: '',
        searchTerm: '',
      });
      setTrips(response.trips);
    };

    fetchTrips();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
  >
    <div className='flex justify-between items-center w-full mb-4 p-4'>
      <h2 className='text-3xl font-bold text-gray-200'>Trips</h2>
      <MotionButton
        text={'Add new Trip'}
        onClick={() => navigate('/create-trip')}
      />
      </div>

      <div className='flex flex-wrap gap-4 p-3'>
        {trips.map((trip, idx) => (
          <TripCard key={idx} trip={trip} />
        ))}
      </div>
      </motion.div>
  );
};

export default Trips;