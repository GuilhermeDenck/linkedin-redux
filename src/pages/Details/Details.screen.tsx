import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GiWeight, GiBodyHeight } from 'react-icons/gi';
import * as pokemonActions from '../../store/actions/pokemonAction';

import {
  ContainerDetails,
  ContainerStats,
  DivPokemon,
  FlavorText,
  GridCell,
  GridInfo,
  HeaderDetails,
  ImgPokeball,
  ImgPokemon,
  Pills,
  PokeMeasures,
  Subtitle,
  Title,
  TypePills,
} from './Details.style';

import pokeballBack from '../../images/pokeball_back.png';

const Details = (reducers: any) => {
  const { id } = useParams();
  const { pokemons, dispatch, loading } = reducers;

  useEffect(() => {
    pokemonActions.setPokemonDetails(id, dispatch);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <ContainerDetails
      color={pokemonActions.setPokemonColor(pokemons?.colorType)}
    >
      <ImgPokeball src={pokeballBack} alt="pokeball" />
      <HeaderDetails>
        <h1>
          <a href="/">
            <AiOutlineArrowLeft style={{ color: '#fff' }} />
          </a>
        </h1>
        <h1>{pokemons.name}</h1>
        <h2>{`#${String(pokemons.id).padStart(3, '0')}`}</h2>
      </HeaderDetails>
      <DivPokemon>
        <ImgPokemon
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons.id}.png`}
          alt={pokemons.name}
        />
      </DivPokemon>
      <ContainerStats>
        <TypePills>
          {pokemons?.type?.map((type: any) => (
            <Pills
              key={type?.type?.name}
              color={pokemonActions.setPokemonColor(type?.type?.name)}
            >
              {type?.type?.name}
            </Pills>
          ))}
        </TypePills>
        <Title color={pokemonActions.setPokemonColor(pokemons?.colorType)}>
          <h2>About</h2>
        </Title>
        <GridInfo>
          <GridCell>
            <PokeMeasures>
              <GiWeight fontSize={'32px'} />
              <p>{(pokemons.weight * 100) / 1000} kg</p>
            </PokeMeasures>
            <Subtitle>Width</Subtitle>
          </GridCell>
          <GridCell>
            <PokeMeasures>
              <GiBodyHeight fontSize={'32px'} />
              <p>{(pokemons.height * 10) / 100} m</p>
            </PokeMeasures>
            <Subtitle>Height</Subtitle>
          </GridCell>
          <GridCell>
            <div>
              {pokemons?.abilities?.map((skill: any) => (
                <p key={skill.ability.name}>{skill.ability.name}</p>
              ))}
            </div>
            <Subtitle>Moves</Subtitle>
          </GridCell>
        </GridInfo>
        <FlavorText>
          <p>{pokemons.text}</p>
        </FlavorText>
        <Title color={pokemonActions.setPokemonColor(pokemons?.colorType)}>
          <h2>Base Stats</h2>
        </Title>
        {pokemons?.stats?.map((st: any) => (
          <div key={st?.stat?.name}>
            <h1>{st?.stat?.name}</h1>
            <p>{st?.base_stat}</p>
          </div>
        ))}
      </ContainerStats>
    </ContainerDetails>
  );
};

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer.activePokemon,
  loading: state.pokemonReducer.loading,
});

export default connect(mapStateToProps)(Details);
