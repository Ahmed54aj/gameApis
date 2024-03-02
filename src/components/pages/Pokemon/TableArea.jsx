import React from 'react';
import useFetch from '../../../hooks/useFetch';


// context
import { useContext } from 'react';
import PokemonContext from '../../../Context/Pokemon';
function TableArea() {
  const pokemonCtx = useContext(PokemonContext)
    const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon';
    useFetch(pokemonApiUrl, pokemonCtx.pokemonData, pokemonCtx.setNewData);
    const {pokemonData, showModal, handleClose,  currentPokemon, } = pokemonCtx;
    // return component
    console.log(pokemonData)
    return (
    <section>
      <p>{window.innerWidth / 1000}</p>
    </section>
  );
}

export default TableArea;