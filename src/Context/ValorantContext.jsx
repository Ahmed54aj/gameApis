import React from 'react';

const ValorantContext = React.createContext();

export const ValorantProvider = ({ children }) => {
 const [valorantData, setData] = React.useState([]);
 const [showModal, setShowModal] = React.useState(false);
 const [currentAgent, setCurrentAgent] = React.useState('');
 const setNewData = (data) => {
   setData(data)
 };
 const handleClose = () => setShowModal(false);
 const handleShow = () =>
  setShowModal(true);


 return (
   <ValorantContext.Provider value={{ valorantData, setNewData, showModal, setShowModal, handleClose, handleShow, currentAgent, setCurrentAgent }}>
     {children}
   </ValorantContext.Provider>
 ); 
};

export default ValorantContext;