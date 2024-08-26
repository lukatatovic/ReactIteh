import React from "react";

const GlobalContext = React.createContext({
  dashboardView: 'trips',
  setDashboardView: () => {},
  userData: {},
  setUserData: () => {},
  transactions: {},
  setTransactions: () => {},
});

export default GlobalContext;