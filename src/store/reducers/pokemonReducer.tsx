import { AnyAction } from 'redux';

interface PokemonDTO {
  activePokemon: {};
  pokemons: {}[];
}

const INITIAL_STATE = {
  activePokemon: {},
  activePokeLoading: true,
  pokemons: [],
  loading: true,
};

const pokemonReducer = (state: PokemonDTO = INITIAL_STATE, action: AnyAction) => {
  if (action.type === 'SET_POKEMON_DETAILS') {
    return {
      ...state,
      activePokemon: action.activePokemon,
      activePokeLoading: action.activePokeLoading,
      loading: action.loading,
    };
  }

  if (action.type === 'SET_POKEMONS') {
    return {
      ...state,
      pokemons: [...state.pokemons, action.pokemons],
      loading: action.loading,
      activePokeLoading: action.activePokeLoading,
    };
  }

  if (action.type === 'RESET_STATE') {
    return (state = INITIAL_STATE);
  }

  return state;
};

export default pokemonReducer;
