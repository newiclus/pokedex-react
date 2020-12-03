import React from 'react';
import Pokemon from './Pokemon';

function NoFound() {
  return (
    <li>
      <img src="https://cyndiquil721.files.wordpress.com/2014/02/missingno.png" alt="" />
      <div className="info">
        <h1 className="no-results">No results</h1>
      </div>
    </li>
  )
}

function ListResult({data, onClick}) {
  return (
    data.map((item) => (
      <Pokemon
        key={`pok-${item.Number}`}
        id={item.Number}
        name={item.Name}
        img={item.img}
        types={item.Types}
        onInfoClick={onClick}
      />
    ))
  );
};

function PokemonsList({list, onMoreInfo}) {
  return (
    <ul className="suggestions">
      {list.length > 0 
        ? <ListResult data={list} onClick={onMoreInfo}/>
        : <NoFound />
      }
    </ul>
  );
};

export default PokemonsList;