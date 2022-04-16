import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import * as pokemonActions from '../../store/actions/pokemonAction';

import {
  ContainerDetails,
  ContainerStats,
  DivPokemon,
  HeaderDetails,
  ImgPokeball,
  ImgPokemon,
} from './Details.style';

import pokeballBack from '../../images/pokeball_back.png';

const Details = (reducers: any) => {
  const { id } = useParams();
  const { pokemons, dispatch, loading } = reducers;
  console.log(reducers)
  
  useEffect(() => {
    pokemonActions.setPokemonDetails(id, dispatch);
    // eslint-disable-next-line
  }, []);

  if(loading) {
    return <h1>loading...</h1>
  }

  return (
    <ContainerDetails
      // color={pokemonActions.setPokemonColor(pokemons.type[0].type.name)}
    >
      <ImgPokeball src={pokeballBack} alt="pokebola" />
      <HeaderDetails>
        <h1>
          <a href="/">
            <AiOutlineArrowLeft style={{ color: '#fff' }} />
          </a>
        </h1>
        <h1>{pokemons.name}</h1>
        <h2>{`#${String(pokemons.id).padStart(3, '0')}`}</h2>
      </HeaderDetails>
      <DivPokemon>
        <ImgPokemon
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons.id}.png`}
          alt={pokemons.name}
        />
      </DivPokemon>
      <ContainerStats></ContainerStats>
    </ContainerDetails>
  );
};

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer.activePokemon,
  loading: state.pokemonReducer.loading,
});

export default connect(mapStateToProps)(Details);
