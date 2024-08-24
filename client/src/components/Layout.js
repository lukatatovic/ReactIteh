import React from 'react';

import { useGlobalContext } from '../hooks/useGlobalContext.hook';

const Layout = () => {
  const { dashboardView } = useGlobalContext();

  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-y-scroll'>
      <div>
        Sidebar
      </div>
      <div className='p-4'>
        <div>
          {(() => {
            switch (dashboardView) {
              case 'trips':
                return <>Trips</>;
              case 'transactions':
                return <>Transactions</>;
              default:
                return <>Trips</>;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Layout;