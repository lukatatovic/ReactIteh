import React,{useState} from 'react';

import GlobalContext from './GlobalContext';

const ContextWrapper = (props) => {
  const [dashboardView, setDashboardView] = useState('trips');
  const [userData, setUserData] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        dashboardView,
        setDashboardView,
        userData,
        setUserData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;