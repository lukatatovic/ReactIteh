import React from 'react';

import { useGlobalContext } from '../hooks/useGlobalContext.hook';
import Sidebar from './dashboard/Sidebar';
import Trips from './dashboard/Trips';
import Transactions from './dashboard/Transactions';

const Layout = () => {
  const { dashboardView } = useGlobalContext();

  return (
    <div className='flex flex-row h-screen w-screen'>
      <div>
        <Sidebar/>
      </div>
      <div className=''>
      <div className='overflow-y-scroll h-full'>
          {(() => {
            switch (dashboardView) {
              case 'trips':
                return <Trips/>;
              case 'transactions':
                return <Transactions/>;
              default:
                return <Trips/>;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Layout;