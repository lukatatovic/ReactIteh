import React from 'react';
import { GrMoney } from 'react-icons/gr';
import { trips } from '../../../utils/constants';

const TransactionCard = ({ transaction }) => {
  return (
    <div className='bg-white rounded-md w-80 '>
      <div className='flex flex-col items-center my-2'>
        <GrMoney className='text-center' size={40} />
        <h2 className='font-bold text-xl'>
          {trips[transaction.trip - 1].destination}
        </h2>
      </div>
      <div className='bg-neutral-50 p-2'>
        <p>
          <span className='font-bold'>Description:</span>{' '}
          {transaction.description}
        </p>
        <p>
          <span className='font-bold'>Amount:</span> ${transaction.amount}
        </p>
        <p>
          <span className='font-bold'>Date:</span> {transaction.date}
        </p>
      </div>
    </div>
  );
};

export default TransactionCard;
