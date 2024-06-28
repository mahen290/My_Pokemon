import React from 'react';
import PokemonCard from './PokemonCard';

function PokemonList( { pokemon } ) {
  return (
    <div className = "pokemon-list">
      {
          pokemon.map (poke => (
            <PokemonCard key = { poke.id }  name = { poke.name } url = { poke.url } /> )
        )
      }
    </div>
  );
}

export default PokemonList;
