import React from 'react';

function Pokemon({id, img, name, types}) {

  return (
    <li key={`item-${id}`}>
      <img src={img} alt={name}/>
      <div className="info">
        <h1><span className="hl">{name}</span></h1>
        <div>
          {types.map(type => (
            <span key={`type-${type}`} className={`type ${type}`}>{type}</span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Pokemon;
