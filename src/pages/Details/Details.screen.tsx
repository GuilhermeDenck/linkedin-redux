import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';

const Details = (reducers: any) => {

  const {id} = useParams();
  const {pokemons, dispatch} = reducers;

  useEffect( () => {
    console.log(id);
    console.log(pokemons);
  },[] )

  return (
    <div>
      Details
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer.activePokemon
});

export default connect(mapStateToProps)(Details);