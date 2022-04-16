import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import * as pokemonActions from '../../store/actions/pokemonAction';
import {
  BtnPokemon,
  CardPokemon,
  Container,
  ContainerFind,
  ContainerPokemons,
  InputFind,
} from './Home.style';
import Card from '../../components/Card/Card.component';

const Home = (reducers: any) => {
  const navigate = useNavigate();

  const { pokemons, dispatch } = reducers;
  const [setSearch, setSearchPokemon] = useState<boolean>(false);
  const [pokeFind, setPokeFind] = useState<any>({});

  pokemonActions.sortPokemon(pokemons);

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
              <CardPokemon
                key={pokemon.id}
                color={pokemonActions.setPokemonColor(
                  pokemon.type[0].type.name
                )}
              >
                <BtnPokemon onClick={() => navigate(`/${pokemon.id}`)}>
                  <Card obj={pokemon} />
                </BtnPokemon>
              </CardPokemon>
            ))
          : pokemons.map((pokemon: any) => (
              <CardPokemon
                key={pokemon.id}
                color={pokemonActions.setPokemonColor(
                  pokemon.type[0].type.name
                )}
              >
                <BtnPokemon onClick={() => navigate(`/${pokemon.id}`)}>
                  <Card obj={pokemon} />
                </BtnPokemon>
              </CardPokemon>
            ))}
      </ContainerPokemons>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer.pokemons,
});

export default connect(mapStateToProps)(Home);
