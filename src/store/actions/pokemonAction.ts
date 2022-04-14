import axios from "axios"

export const getPokemon = async (dispatch: any, offset: number) => {
  try {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
    console.log(data.results);
    
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
  const arrayPoke: any = []
  results.forEach( async (element: any) => {
    try {
      const {data} = await axios.get(element.url);
      const Details = {
        details: {
          id: data.id,
          picture: data.sprites.front_default,
          type: data.types
        }
      }
      arrayPoke.push(Details);
    } catch (error) {
      console.log(error);
    }
  });

  const PokemonsDetails = {
    type: 'SET_POKEMON_DETAILS',
    pokemonsDetails: arrayPoke
  }
  console.log(PokemonsDetails);
  
  dispatch(PokemonsDetails);
}