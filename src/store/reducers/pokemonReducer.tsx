interface PokemonDTO {
  activePokemon: {},
  pokemonsDetails: {}[]
}

const INITIAL_STATE = {
  activePokemon: {},
  pokemonsDetails: []
}

const pokemonReducer = ( state: PokemonDTO = INITIAL_STATE, action: any ) => {

  if(action.type === 'SET_POKEMON') {
    return {
      ...state,
      activePokemon: action.activePokemon
    }
  }

  if(action.type === 'SET_POKEMON_DETAILS') {
    return {
      ...state,
      pokemonsDetails: [...state.pokemonsDetails ,action.pokemonsDetails]
    }
  }

  return state;
}

export default pokemonReducer;