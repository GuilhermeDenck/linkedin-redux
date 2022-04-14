import axios from "axios"

export const getPokemon = async (dispatch: any) => {
  try {
    const {data} = await axios.get('https://pokeapi.co/api/v2/generation/1');
    console.log(data.pokemon_species);
    
    const Pokemons = {
      type: 'SET_POKEMONS',
      pokemons: data.pokemon_species
    }

    dispatch(Pokemons);

  } catch (error) {
    console.log(error);
  }
}