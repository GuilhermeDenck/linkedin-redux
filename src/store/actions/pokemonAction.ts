import axios from 'axios';

export const getPokemon = async (dispatch: any) => {
  dispatch({ type: 'RESET_STATE' });
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`
    );
    getDetailsPokemon(dispatch, data.results);
  } catch (error) {
    console.log(error);
  }
};

export const getDetailsPokemon = async (dispatch: any, results: Array<object>) => {
  results.forEach(async (element: any) => {
    try {
      const { data } = await axios.get(element.url);
      const pokemons = {
        id: data.id,
        name: data.name,
        type: data.types,
      };

      const Pokemons = {
        type: 'SET_POKEMONS',
        pokemons: pokemons,       
        loading: false,
        activePokeLoading: true,
      };

      dispatch(Pokemons);
    } catch (error) {
      console.log(error);
    }
  });
};

export const setPokemonDetails = async (idPokemon?: string, dispatch?: any, navigate?: any) => {
  try {
    const details = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`
    );
    const species = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${idPokemon}/`
    );

    const PokemonDetailsObj = {
      id: details.data.id,
      name: details.data.name,
      picture: details.data.sprites.front_default,
      type: details.data.types,
      colorType: details.data.types[0].type.name,
      weight: details.data.weight,
      height: details.data.height,
      abilities: details.data.abilities,
      stats: details.data.stats,
      text: species.data.flavor_text_entries[10].flavor_text,
    };

    const PokemonDetails = {
      type: 'SET_POKEMON_DETAILS',
      activePokemon: PokemonDetailsObj,
      activePokeLoading: false,
      loading: true,
    };
    
    dispatch(PokemonDetails);
  } catch (error) {
    navigate('/')
    console.log(error);
  }
};

export const sortPokemon = (data: any) => {
  data.sort((a: any, b: any) => {
    return a.id - b.id;
  });
};
