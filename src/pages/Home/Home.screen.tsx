import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import * as pokemonActions from '../../store/actions/pokemonAction';
import { CardPokemon, Container, ContainerPokemons, ImgPokemon } from './Home.style';

const Home = (reducers: any) => {

  const navigate = useNavigate();

  const [offset, setOffset] = useState<number>(0);
  const {pokemons, dispatch} = reducers;

  console.log(pokemons.pokemonsDetails);
  

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
    <Container>
      <div>
        <h1>Pokédex</h1>
        <input type="text" onChange={ e => handleSearch(e.target.value)}  />
      </div>

      <ContainerPokemons>
        {
          pokemons.pokemonsDetails.map( (pokemon: any)  => 
          <li key={pokemon.id}>
            <CardPokemon onClick={ () => pokemonActions.setPokemonDetails(pokemon.id, pokemons.pokemonsDetails, dispatch) }>
              <p>{pokemon.id}</p>
              <ImgPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} />
              <p>{pokemon.name}</p> 
            </CardPokemon>
          </li>
          )
        }
      </ContainerPokemons>
    </Container>
  );
}

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer
});

export default connect(mapStateToProps)(Home);