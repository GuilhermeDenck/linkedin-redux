import axios from "axios"

export const getPokemon = async (dispatch: any, offset: number) => {
  try {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`);
    
    const Pokemons = {
      type: 'SET_POKEMONS',
      pokemons: data.results
    }

    dispatch(Pokemons);
    getDetailsPokemon(dispatch, data.results);
  } catch (error) {
    console.log(error);
  }
}

export const getDetailsPokemon = async (dispatch:any ,results: any) => {
  results.forEach( async (element: any) => {
    try {
      const {data} = await axios.get(element.url);
      const Details = {
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
        type: 'SET_POKEMON_DETAILS',
        pokemonsDetails: Details
      }
      
      dispatch(PokemonsDetails);
    } catch (error) {
      console.log(error);
    }
  });
  

}

export const setPokemonDetails = (idPokemon: number, dispatch: any) => {

}