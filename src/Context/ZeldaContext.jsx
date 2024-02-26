import React from 'react';

const ZeldaContext = React.createContext();

export const ZeldaProvider = ({ children }) => {
 const [zeldaData, setData] = React.useState([]);
 const setNewData = (data) => {
   setData(data)
 };

 return (
   <ZeldaContext.Provider value={{ zeldaData, setNewData }}>
     {children}
   </ZeldaContext.Provider>
 );
};

export default ZeldaContext;