import axios from "axios"

export const getPokemon = async (dispatch: any, offset: number) => {
  try {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);

    const Pokemons = {
      type: 'SET_POKEMONS',
      pokemons: data.results,
    }

    dispatch(Pokemons);

  } catch (error) {
    console.log(error);
  }

}

export const getPokemonDetails = async (dispatch: any, id: number, navigate: any) => {

  try {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const details = {
      id: data.id,
      name: data.name,
      picture: data.sprites.front_default,
      type: data.types,
      weight: data.weight,
      height: data.height,
      abilities: data.abilities,
      stats: data.stats
    }
    
    const PokemonsDetails = {
      type: 'SET_POKEMON',
      activePokemon: details
    }


  dispatch(PokemonsDetails);
  navigate(`/${id}`);
    
  } catch (error) {
    
  }
}
