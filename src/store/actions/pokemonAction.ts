import axios from "axios"

export const getPokemon = async (dispatch: any) => {
  try {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`);
    // sortPokemon(data.results);
    getDetailsPokemon(dispatch, data.results);
  } catch (error) {
    console.log(error);
  }
}

export const sortPokemon = (data: any) => {
    
  data.sort((a: any, b: any) => {
    return b.id - a.id;
  })
};

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

export const setPokemonDetails = (idPokemon: number, arrayPokemons:any ,dispatch: any) => {

  const PokemonSelected = arrayPokemons.find( (e: any) => idPokemon === e.id )
  const active = {
    type: 'SET_POKEMON',
    activePokemon: PokemonSelected
  }

  dispatch(active);
}