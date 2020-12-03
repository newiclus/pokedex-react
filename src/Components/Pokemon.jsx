import React from 'react';

function Pokemon({id, img, name, types, onInfoClick}) {

  const handleMoreInfo = (event) => {
    const { target } = event;
    const id = target.getAttribute('data-id');
    onInfoClick(id);
  }

  return (
    <li key={`item-${id}`}>
      <img src={img} alt={name}/>
      <div className="info">
        <h1>{name}<span className="hl"></span></h1>
        <div>
          {types.map(type => (
            <span key={`type-${type}`} className={`type ${type}`}>{type}</span>
          ))}
          <aside className="options">
            <button data-id={id} onClick={handleMoreInfo}>More info</button>
          </aside>
        </div>
      </div>
    </li>
  );
};

export default Pokemon;
