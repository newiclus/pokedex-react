import React from 'react';
import PropTypes from 'prop-types';
import './PokemonDetail.css';

function Avatar({img, name, cp}) {
  return (
    <figure className="pokemon__avatar">
      <img src={img} alt={`avatar of ${name}`}/>
      {cp && <figcaption>CP <span>{cp}</span></figcaption>}
    </figure>
  );
}


function Info({title, value, arrValue}) {
  return (
    <div className="info">
      <cite>{title}</cite>
      <p>
        {arrValue 
          ? arrValue.map(type => (
            <span key={type}>{type}</span>
          ))
          : <span>{value}</span>
        }
      </p>
    </div>
  );
}


function PokemonDetail({detail}) {
  const attacks = detail["Special Attack(s)"];

  return (
    <article className="pokemon">
      <Avatar img={detail.img} name={detail.Name} cp={detail.MaxCP} />
      <h2 className="pokemon__name">{detail.Name}</h2>
      <p className="pokemon__description">{detail.About}</p>
      
      <div className="pokemon__details">
        <Info title="Type" arrValue={detail.Types} />
        <Info title="Weight" value={detail.Weight.Minimum} />
        <Info title="Height" value={detail.Height.Minimum} />
      </div>

      <ul className="pokemon__attacks">
        <li className="stitle">Attacks</li>
        {attacks.map(item => (
          <li className="attack" key={item.id}>{item.name}</li>
        ))}
      </ul>
    </article>
  )
}

PokemonDetail.propTypes = {
  detail: PropTypes.shape({
    Name: PropTypes.string,
    img: PropTypes.string,
    MaxCP: PropTypes.number,
    About: PropTypes.string,
    Types: PropTypes.array,
    Weight: PropTypes.object,
    Height: PropTypes.object,
    "Special Attack(s)": PropTypes.array
  })
}

export default PokemonDetail;
