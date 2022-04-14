import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as pokemonActions from '../../store/actions/pokemonAction';

const Home = (reducers: any) => {

  const [ offset, setOffset ] = useState<number>(0);

  const {pokemons, dispatch} = reducers;

  console.log(pokemons);

  useEffect( () => {
    pokemonActions.getPokemon(dispatch, offset);
  },[offset] )

  return (
    <div>
      <button onClick={ () => setOffset(offset + 20) } > click </button>
      {
        pokemons.map( (pokemon: any)  => 
          <p>{pokemon.name}</p> 
        )
      }
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer.pokemons
});

export default connect(mapStateToProps)(Home);