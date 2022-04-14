interface PokemonDTO {
  activePokemon: object,
  pokemons: {}[],
  pokemonsDetails: {}[]
}

const INITIAL_STATE = {
  activePokemon: {},
  pokemons: [],
  pokemonsDetails: []
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
      pokemonDetails: action.pokemonDetails
    }
  }

  return state;
}

export default pokemonReducer;