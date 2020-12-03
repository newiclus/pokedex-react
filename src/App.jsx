import React, {useState, useEffect} from 'react';
import PokemonsList from './Components/PokemonsList';
import Modal from './Components/Modal';
import PokemonDetail from './Components/PokemonDetail';

import './App.css';

const URL_PATH = "https://gist.githubusercontent.com/newiclus/abc33f57ce811471371f560ed497f2ea/raw/731f61720c5d927ccdd2f6186d16dbea6a080f61/pokemon.json";

const App = () => {
    const [pokeDex, setPokeDex] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const [pokemonDetail, setPokemonDetail] = useState({});

    const getPokemonData = () => (
      fetch(URL_PATH)
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => console.log(error.message))
    );

    useEffect(() => {
      getPokemonData().then((data) => {
        setPokeDex(data);
        setPokemons(data);
        setIsLoading(false);
      });
    }, []);

    const getPokemonFiltering = (query, data) => {
      const matchPattern = (element) => element.toLowerCase().includes(query);

      if (data && data.length > 0) {
        return data.filter(item => matchPattern(item.Name) || item.Types.some(matchPattern));
      }
      return [];
    }

    const handleSearchBox = (event) => {
      const { value } = event.target;

      if (value.length >= 3) {
        const result = getPokemonFiltering(value, pokeDex);
        const orderResultByName = result.sort((current, next) => {
          if (current.Name > next.Name) {
            return 1;
          }
          if (current.Name < next.Name) {
            return -1;
          }
          return 0;
        });

        setPokemons(orderResultByName);
      } else if (value.length === 0) {
        setPokemons(pokeDex);
      }
    }

    const handleCloseModal = (event) => {
      setOpenModal(false);
      document.querySelector('body').classList.remove('onModal');
    }

    const handleMoreInfo = (id) => {
      const detail = pokeDex.filter(item => item.Number === id);

      setOpenModal(true);
      setCurrentId(id);
      setPokemonDetail(detail[0]);

      document.querySelector('body').classList.add('onModal');
    }

    return (
      <React.Fragment>
        <section id="main">
          <label htmlFor="maxCP" className="max-cp">
            <input type="checkbox" id="maxCP" />
            <small>Maximum Combat Points</small>
          </label>

          <input type="search" className="input" onChange={handleSearchBox} placeholder="Pokemon or type" />

          {isLoading && <div className="loader"></div>}

          <PokemonsList list={pokemons} onMoreInfo={handleMoreInfo} />
        </section>

        <Modal open={openModal} onClose={handleCloseModal}>
          {currentId && <PokemonDetail detail={pokemonDetail} />}
        </Modal>
      </React.Fragment>
    );
}

export default App;
