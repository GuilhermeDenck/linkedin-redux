interface PokemonDTO {
  activePokemon: object,
  data: {
    pokemon_species: {}[]
  }[]
}

const INITIAL_STATE = {
  activePokemon: {},
  data: []
}

const pokemonReducer = ( state: PokemonDTO = INITIAL_STATE, action: any ) => {

  if(action.type === 'SET_POKEMON') {
    return {
      ...state,
      activePokemon: action.data
    }
  }

  return state;
}

export default pokemonReducer;