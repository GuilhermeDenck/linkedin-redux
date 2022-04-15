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

  
  const sortPokemon = (data: any) => {
    data.sort((a: any, b: any) => {
      return a.id - b.id;
    })
  };

  sortPokemon(pokemons)
  

  const handleSearch = (value: string) => {
    const regex = new RegExp(value, 'gim');

    const pokemonsFiltered = pokemons.filter((pokemon: any) => {
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
              <CardPokemon onClick={ () =>  navigate(`/${pokemon.id}`) }>
                <p>{pokemon.id}</p>
                <ImgPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
                <p>{pokemon.name}</p>
              </CardPokemon>
          </li>
           )) : pokemons.map( (pokemon:any ) => (
            <li key={pokemon.id}>
              <CardPokemon onClick={ () => navigate(`/${pokemon.id}`) }>
                <p>{pokemon.id}</p>
                <ImgPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
                <p>{pokemon.name}</p> 
              </CardPokemon>
          </li>
           ))
        }
      </ContainerPokemons>
    </Container>
  );
}

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer.pokemons
});

export default connect(mapStateToProps)(Home);