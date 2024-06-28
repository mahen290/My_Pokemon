import React, { useState, useEffect } from 'react';

function PokemonCard ( { name, url } ) {
  const [ details, setDetails ] = useState ( null );
 
  useEffect( () => {
    fetch (url)
      .then( response => response.json() )
      .then( data => setDetails(data) );
  }, [url] );


  return (
<div className = "pokemon-card">
      <h2> { name } </h2>
    { 
        details && (
    <div>
      <img src = { details.sprites.front_default } alt = { name } />
      <p> Height : { details.height } </p>
      <p> Weight : { details.weight } </p>
      <p> Type : { details.types.map ( typeinfo => typeinfo.type.name ).join(',') } </p>
    </div>
      )
    }
</div>
  );
}

export default PokemonCard;
