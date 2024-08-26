import React, { useEffect, useState } from 'react';

import { useGlobalContext } from '../../hooks/useGlobalContext.hook';
import TransactionCard from './dashboard-reusable/TransactionCard';

const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesArray, setPagesArray] = useState([]);
  const { transactions } = useGlobalContext();

  useEffect(() => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(transactions?.length / 8); i++) {
      pages.push(i);
    }
    setPagesArray(pages);
    setCurrentPage(1);
  }, [transactions]);

  return (
    <div className='w-full'>
      <div className='flex justify-between w-full'>
        <h2 className='text-3xl font-bold p-2'>Transactions</h2>
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
        {transactions
          .slice(currentPage * 8 - 8, currentPage * 8)
          .map((transaction, idx) => (
            <TransactionCard key={idx} transaction={transaction} />
          ))}
      </div>
    </div>
  );
};

export default Transactions;