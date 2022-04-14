interface PokemonDTO {
  activePokemon: object,
  pokemons: {}[],
}

const INITIAL_STATE = {
  activePokemon: {},
  pokemons: [],
}

const pokemonReducer = ( state: PokemonDTO = INITIAL_STATE, action: any ) => {

  if(action.type === 'SET_POKEMONS') {
    return {
      ...state,
      pokemons: action.pokemons
    }
  }

  if(action.type === 'SET_POKEMON') {
    return {
      ...state,
      activePokemon: action.pokemons
    }
  }

  if(action.type === 'SET_POKEMON_DETAILS') {
    return {
      ...state,
      pokemonsDetails: action.pokemonsDetails
    }
  }

  return state;
}

export default pokemonReducer;