import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GiWeight, GiBodyHeight } from 'react-icons/gi';
import * as pokemonActions from '../../store/actions/pokemonAction';

import {
  BarStats,
  ContainerBars,
  ContainerDetails,
  ContainerStats,
  DivPokemon,
  FillBarStats,
  FlavorText,
  GridInfo,
  GridInfoCell,
  GridStats,
  GridStatsCell,
  HeaderDetails,
  ImgPokeball,
  ImgPokemon,
  NumStats,
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
          <GridInfoCell>
            <PokeMeasures>
              <GiWeight fontSize={'32px'} />
              <p>{(pokemons.weight * 100) / 1000} kg</p>
            </PokeMeasures>
            <Subtitle>Width</Subtitle>
          </GridInfoCell>
          <GridInfoCell>
            <PokeMeasures>
              <GiBodyHeight fontSize={'32px'} />
              <p>{(pokemons.height * 10) / 100} m</p>
            </PokeMeasures>
            <Subtitle>Height</Subtitle>
          </GridInfoCell>
          <GridInfoCell>
            <div>
              {pokemons?.abilities?.map((skill: any) => (
                <p key={skill.ability.name}>{skill.ability.name}</p>
              ))}
            </div>
            <Subtitle>Moves</Subtitle>
          </GridInfoCell>
        </GridInfo>
        <FlavorText>
          <p>{pokemons.text}</p>
        </FlavorText>
        <Title color={pokemonActions.setPokemonColor(pokemons?.colorType)}>
          <h2>Base Stats</h2>
        </Title>
        <GridStats>
          <GridStatsCell
            color={pokemonActions.setPokemonColor(pokemons?.colorType)}
          >
            <p>HP</p>
            <p>ATK</p>
            <p>DEF</p>
            <p>SATK</p>
            <p>SDEF</p>
            <p>SPD</p>
          </GridStatsCell>
          <GridStatsCell>
            {pokemons?.stats?.map((st: any) => (
              <ContainerBars key={st?.stat?.name}>
                <NumStats>
                  <p>{String(st?.base_stat).padStart(3, '0')}</p>
                </NumStats>
                <BarStats
                  color={pokemonActions.setPokemonColor(pokemons?.colorType)}
                >
                  <FillBarStats
                    color={pokemonActions.setPokemonColor(pokemons?.colorType)}
                    fulfill={st?.base_stat}
                  />
                </BarStats>
              </ContainerBars>
            ))}
          </GridStatsCell>
        </GridStats>
      </ContainerStats>
    </ContainerDetails>
  );
};

const mapStateToProps = (state: any) => ({
  pokemons: state.pokemonReducer.activePokemon,
  loading: state.pokemonReducer.loading,
});

export default connect(mapStateToProps)(Details);
