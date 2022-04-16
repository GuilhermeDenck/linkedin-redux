import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  ContainerDetails,
  ContainerStats,
  HeaderDetails,
} from './Details.style';

import * as pokemonActions from '../../store/actions/pokemonAction';

const Details = (reducers: any) => {
  const { id } = useParams();
  const { pokemons, dispatch } = reducers;

  
  
  useEffect(() => {
    pokemonActions.setPokemonDetails(id, dispatch);
    // eslint-disable-next-line
  }, []);

  return (
    <ContainerDetails>
      <HeaderDetails>
        <a href="/">Voltar</a>
        <h1>{pokemons.name}</h1>
        <h2>{`#${String(pokemons.id).padStart(3, '0')}`}</h2>
      </HeaderDetails>
      <ContainerStats>
        <p>About</p>
      </ContainerStats>
    </ContainerDetails>
  );
};

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer.activePokemon,
});

export default connect(mapStateToProps)(Details);
