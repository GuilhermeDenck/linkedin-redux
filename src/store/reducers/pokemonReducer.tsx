interface PokemonDTO {
  activePokemon: {},
  pokemons: {}[]
}

const INITIAL_STATE = {
  activePokemon: {},
  pokemons: []
}

const pokemonReducer = ( state: PokemonDTO = INITIAL_STATE, action: any ) => {

  if(action.type === 'SET_POKEMON_DETAILS') {
    return {
      ...state,
      activePokemon: action.activePokemon
    }
  }

  if(action.type === 'SET_POKEMONS') {
    return {
      ...state,
      pokemons: [...state.pokemons ,action.pokemons]
    }
  }

  if(action.type === 'RESET_STATE') {
    return state = INITIAL_STATE;
  }

  return state;
}

export default pokemonReducer;