import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { ContainerDetails, ContainerStats, HeaderDetails } from './Details.style';

const Details = (reducers: any) => {
  const { id } = useParams();
  const { pokemons, dispatch } = reducers;
  const { type } = pokemons;

  useEffect(() => {
    // console.log(id);
    console.log(pokemons);
    console.log(type[0].type.name);
  }, []);

  return (
    <ContainerDetails>
      <HeaderDetails>
        <h1>{pokemons.name}</h1>
        <h2>{pokemons.id}</h2>
        {/* <p>{type}</p> */}
      </HeaderDetails>
      <ContainerStats>
        <h1>About</h1>
      </ContainerStats>
    </ContainerDetails>
  );
};

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer.activePokemon,
});

export default connect(mapStateToProps)(Details);
