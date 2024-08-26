import React,{useState} from 'react';

import GlobalContext from './GlobalContext';
import { initialTransactions } from '../utils/constants';

const ContextWrapper = (props) => {
  const [dashboardView, setDashboardView] = useState('trips');
  const [userData, setUserData] = useState({});
  const [transactions, setTransactions] = useState(initialTransactions);

  return (
    <GlobalContext.Provider
      value={{
        dashboardView,
        setDashboardView,
        userData,
        setUserData,
        transactions,
        setTransactions,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
