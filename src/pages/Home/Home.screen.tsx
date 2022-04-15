import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import * as pokemonActions from '../../store/actions/pokemonAction';
import { CardPokemon, Container, ContainerPokemons, ImgPokemon } from './Home.style';

const Home = (reducers: any) => {

  const navigate = useNavigate();

  const {pokemons, dispatch} = reducers;
  const [setSearch, setSearchPokemon] = useState<boolean>(false);
  const [pokeFind, setPokeFind] = useState<any>({});

  console.log(pokemons.pokemonsDetails);

  const handleSearch = (value: string) => {
    const regex = new RegExp(value, 'gim');

    const pokemonsFiltered = pokemons.pokemonsDetails.filter((pokemon: any) => {
      return pokemon.name.match(regex);
    });

    if(pokemonsFiltered.length !== 0) {
      setPokeFind(pokemonsFiltered);
      setSearchPokemon(true);
    } else {
      setSearchPokemon(false);
    }
  }

  useEffect( () => {
    pokemonActions.getPokemon(dispatch);
  },[] )

  return (
    <Container>
      <div>
        <h1>Pokédex</h1>
        <input type="text" onChange={ e => handleSearch(e.target.value)}  />
      </div>

      <ContainerPokemons>
        {
           setSearch ? pokeFind.map( (pokemon:any ) => (
            <li key={pokemon.id}>
              <CardPokemon onClick={ () => pokemonActions.setPokemonDetails(pokemon.id, pokemons.pokemonsDetails, dispatch) }>
                <p>{pokemon.id}</p>
                <ImgPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} />
                <p>{pokemon.name}</p>
              </CardPokemon>
          </li>
           )) : pokemons.pokemonsDetails.map( (pokemon:any ) => (
            <li key={pokemon.id}>
              <CardPokemon onClick={ () => pokemonActions.setPokemonDetails(pokemon.id, pokemons.pokemonsDetails, dispatch) }>
                <p>{pokemon.id}</p>
                <ImgPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} />
                <p>{pokemon.name}</p> 
              </CardPokemon>
          </li>
           ))
        }

        {/* {
          pokemons.pokemonsDetails.map( (pokemon: any)  => 
          <li key={pokemon.id}>
            <CardPokemon onClick={ () => pokemonActions.setPokemonDetails(pokemon.id, pokemons.pokemonsDetails, dispatch) }>
              <p>{pokemon.id}</p>
              <ImgPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name} />
              <p>{pokemon.name}</p> 
            </CardPokemon>
          </li>
          )
        } */}
      </ContainerPokemons>
    </Container>
  );
}

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer
});

export default connect(mapStateToProps)(Home);