import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as pokemonActions from '../../store/actions/pokemonAction';

// const Card = (reducers: any, pokemon: any) => {
//   const { dispatch } = reducers;

//   const navigate = useNavigate();

//   return (
//     <button
//       onClick={() =>
//         pokemonActions.getPokemonDetails(
//           dispatch,
//           pokemon.url.split('/')[6],
//           navigate
//         )
//       }
//     >
//       <img
//         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
//           pokemon.url.split('/')[6]
//         }.svg`}
//         alt="TESTE"
//       />
//       <p>{pokemon.name}</p>
//     </button>
//   );
// };

// const mapStateToProps = (state: any) => ({
//   pokemons: state.pokemonReducer.pokemons,
// });

// export default connect(mapStateToProps)(Card);
