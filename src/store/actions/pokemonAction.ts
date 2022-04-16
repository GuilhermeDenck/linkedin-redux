import axios from 'axios';

export const getPokemon = async (dispatch: any) => {
  dispatch({ type: 'RESET_STATE' });
  try {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`);
    getDetailsPokemon(dispatch, data.results);
  } catch (error) {
    console.log(error);
  }
};

export const getDetailsPokemon = async (dispatch: any, results: any) => {
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
      };

      dispatch(Pokemons);
    } catch (error) {
      console.log(error);
    }
  });
};

export const setPokemonDetails = async (idPokemon?: string, dispatch?: any) => {
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
      type: details.data.types[0].type,
      weight: details.data.weight,
      height: details.data.height,
      abilities: details.data.abilities,
      stats: details.data.stats,
      text: species.data.flavor_text_entries[10].flavor_text,
    };

    const PokemonDetails = {
      type: 'SET_POKEMON_DETAILS',
      activePokemon: PokemonDetailsObj,
      loading: false,
    };

    dispatch(PokemonDetails);
  } catch (error) {
    console.log(error);
  }
};

export const setPokemonColor = (type: string) => {
  switch (type) {
    case 'normal':
      return '#A8A77A';
    case 'fire':
      return '#EE8130';
    case 'water':
      return '#6390F0';
    case 'electric':
      return '#F7D02C';
    case 'grass':
      return '#7AC74C';
    case 'ice':
      return '#96D9D6';
    case 'fighting':
      return '#C22E28';
    case 'poison':
      return '#A33EA1';
    case 'ground':
      return '#E2BF65';
    case 'flying':
      return '#A98FF3';
    case 'psychic':
      return '#F95587';
    case 'bug':
      return '#A6B91A';
    case 'rock':
      return '#B6A136';
    case 'ghost':
      return '#735797';
    case 'dragon':
      return '#6F35FC';
    case 'dark':
      return '#705746';
    case 'steel':
      return '#B7B7CE';
    case 'fairy':
      return '#D685AD';
    default:
      return '#FFF';
  }
};

export const sortPokemon = (data: any) => {
  data.sort((a: any, b: any) => {
    return a.id - b.id;
  });
};
