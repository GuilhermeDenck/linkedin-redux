import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import * as pokemonActions from '../../store/actions/pokemonAction';
import {
  CardPokemon,
  Container,
  ContainerFind,
  ContainerPokemons,
  InputFind,
} from './Home.style';
import Card from '../../components/Card/Card.component';
import { pokecolor } from '../../colors';

const Home = (reducers: any) => {
  const navigate = useNavigate();

  const { pokemons, dispatch } = reducers;
  const [setSearch, setSearchPokemon] = useState<boolean>(false);
  const [pokeFind, setPokeFind] = useState<any>({});

  const sortPokemon = (data: any) => {
    data.sort((a: any, b: any) => {
      return a.id - b.id;
    });
  };

  sortPokemon(pokemons);

  const handleSearch = (value: string) => {
    const regex = new RegExp(value, 'gim');

    const pokemonsFiltered = pokemons.filter((pokemon: any) => {
      return pokemon.name.match(regex);
    });

    if (pokemonsFiltered.length !== 0) {
      setPokeFind(pokemonsFiltered);
      setSearchPokemon(true);
    } else {
      setSearchPokemon(false);
    }
  };

  useEffect(() => {
    pokemonActions.getPokemon(dispatch);
    console.log(pokecolor)
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <ContainerFind>
        <h1>Pokédex</h1>
        <InputFind
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Procurar"
        />
      </ContainerFind>

      <ContainerPokemons>
        {setSearch
          ? pokeFind.map((pokemon: any) => (
              <li key={pokemon.id}>
                <CardPokemon onClick={() => navigate(`/${pokemon.id}`)} color={pokemon.type[0].type.name}>
                  <Card obj={pokemon} />
                </CardPokemon>
              </li>
            ))
          : pokemons.map((pokemon: any) => (
              <li key={pokemon.id}>
                <CardPokemon onClick={() => navigate(`/${pokemon.id}`)}>
                  <Card obj={pokemon} />
                </CardPokemon>
              </li>
            ))}
      </ContainerPokemons>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer.pokemons,
});

export default connect(mapStateToProps)(Home);
