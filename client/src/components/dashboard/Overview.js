import React from 'react';
import { motion } from 'framer-motion';

const Overview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
    >
      <div className='flex justify-between items-center w-full mb-4 p-4'>
        <h2 className='text-3xl font-bold text-gray-200'>Overview</h2>
      </div>
    </motion.div>
  );
};

export default Overview;