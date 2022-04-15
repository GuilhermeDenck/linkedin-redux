import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import * as pokemonActions from '../../store/actions/pokemonAction';

const Home = (reducers: any) => {

  const navigate = useNavigate();

  const [offset, setOffset] = useState<number>(0);
  const {pokemons, dispatch} = reducers;


  const handleSearch = (value: string) => {
    const regex = new RegExp(value, 'gim');
    const filteredPokemons = pokemons.filter((pokemon: any) => {
      return pokemon.name.match(regex);
    });

    const Pokemons = {
      type: 'SET_POKEMONS',
      pokemons: filteredPokemons
    }

    if(filteredPokemons.length !== 0) {
      dispatch(Pokemons);
    } else {
      pokemonActions.getPokemon(dispatch, offset);
    }
  }

  useEffect( () => {
    pokemonActions.getPokemon(dispatch, offset);
  },[offset] )

  return (
    <div>
      <div>
        <input type="text" onChange={ e => handleSearch(e.target.value)}  />
        <button disabled={ offset === 0 } onClick={ () => setOffset(offset - 20)}> Previous </button>
        <button disabled={ offset >= 150 } onClick={ () => setOffset(offset + 20) } > Next </button>
      </div>

      <ul>
        {
          pokemons.map( (pokemon: any)  => 
          <li>
            <button onClick={ () => pokemonActions.getPokemonDetails(dispatch, pokemon.url.split('/')[6], navigate) }>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.url.split('/')[6]}.svg`} alt="TESTE" />
              <p>{pokemon.name}</p> 
            </button>
          </li>
          )
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer.pokemons
});

export default connect(mapStateToProps)(Home);