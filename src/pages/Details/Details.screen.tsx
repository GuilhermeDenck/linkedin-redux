import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import * as pokemonActions from '../../store/actions/pokemonAction';

import {
  ContainerDetails,
  ContainerStats,
  HeaderDetails,
  ImgPokeball,
  ImgPokemon,
} from './Details.style';

import pokeballBack from '../../images/pokeball_back.png';

const Details = (reducers: any) => {
  const { id } = useParams();
  const { pokemons, dispatch } = reducers;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    pokemonActions.setPokemonDetails(id, dispatch);
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <ContainerDetails
    /*color={pokemonActions.setPokemonColor(pokemons.type[0].type.name)}*/
    >
      <ImgPokeball src={pokeballBack} alt="pokebola" />
      <HeaderDetails>
        <h2>
          <a href="/">
            <AiOutlineArrowLeft style={{ color: '#fff' }} />
          </a>
        </h2>
        <h2>{pokemons.name}</h2>
        <h3>{`#${String(pokemons.id).padStart(3, '0')}`}</h3>
      </HeaderDetails>
      <div>
        <ImgPokemon
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons.id}.png`}
          alt={pokemons.name}
        />
      </div>
      <ContainerStats>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          unde facere ullam quas, dolorum ipsa, beatae totam itaque quis sint
          culpa illum ratione quos laborum! Aliquid excepturi voluptatibus
          consectetur architecto!
        </p>
      </ContainerStats>
    </ContainerDetails>
  );
};

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer.activePokemon,
});

export default connect(mapStateToProps)(Details);
