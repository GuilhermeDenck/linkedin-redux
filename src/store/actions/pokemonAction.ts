import axios from "axios"

export const getPokemon = async (dispatch: any, offset: number) => {
  try {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);

    const imgs: any = [];
    data.results.forEach( async (element: any) => {
      try {
        const {data} = await axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${element.url.split('/')[6]}.png`);
        imgs.push({
          id: element.url.split('/')[6],
          img: data
        });
        
      } catch (error) {
        console.log();
      }
    });
  
    const Pokemons = {
      type: 'SET_POKEMONS',
      pokemons: {
        pokemons: data.results,
        imgPokemons: imgs
      }
    }
    console.log(Pokemons);
  
    dispatch(Pokemons);
    
  } catch (error) {
    console.log(error);
  }

}


// export const getDetailsPokemon = async (dispatch:any ,results: any) => {
//   const arrayPoke: any = []
//   results.forEach( async (element: any) => {
//     try {
//       const {data} = await axios.get(element.url);
//       console.log(data);
//       const Details = {
//         details: {
//           id: data.id,
//           picture: data.sprites.front_default,
//           type: data.types,
//           weight: data.weight,
//           height: data.height,
//           abilities: data.abilities,
//           stats: data.stats
//         }
//       }
//       arrayPoke.push(Details);
//     } catch (error) {
//       console.log(error);
//     }
//   });

//   const PokemonsDetails = {
//     type: 'SET_POKEMON_DETAILS',
//     pokemonsDetails: arrayPoke
//   }
//   console.log(PokemonsDetails);
  
//   dispatch(PokemonsDetails);
// }