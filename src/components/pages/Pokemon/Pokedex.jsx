import React from 'react';
// import intro
import Pokeball from './Pokeball';
import TableArea from './TableArea';
function Pokedex() {
  return (
    <main id='pokedex-main' style={{ height: '100%', position: 'relative',  display:'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
     justifyContent: 'center',
      alignItems:'center'}}>
      <Pokeball />
      <TableArea />
    </main>
  );
}

export default Pokedex;