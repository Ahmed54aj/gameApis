import React from 'react';

const PokemonContext = React.createContext();

export const PokemonProvider = ({ children }) => {
 const [pokemonData, setData] = React.useState([]);
 const [showModal, setShowModal] = React.useState(false);
 const [currentPokemon, setCurrentPokemon] = React.useState('');
 const setNewData = (data) => {
   setData(data)
 };
 const handleClose = () => setShowModal(false);
 const handleShow = () =>
  setShowModal(true);


 return (
   <PokemonContext.Provider value={{ pokemonData, setNewData, showModal, setShowModal, handleClose, handleShow, currentPokemon, setCurrentPokemon }}>
     {children}
   </PokemonContext.Provider>
 ); 
};

export default PokemonContext;