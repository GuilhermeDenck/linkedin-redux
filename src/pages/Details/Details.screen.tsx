import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect, RootStateOrAny } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { GiWeight, GiBodyHeight } from 'react-icons/gi';
import Colors from '../../enums/ColorsEnums';
import * as pokemonActions from '../../store/actions/pokemonAction';
import Loading from '../../components/Loading/Loading.component';

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
  const { pokemons, dispatch, activePokeLoading } = reducers;
  const navigate = useNavigate();

  useEffect(() => {
    pokemonActions.setPokemonDetails(id, dispatch, navigate);
    // eslint-disable-next-line
  }, []);

  if(activePokeLoading) return <Loading />

  return (
    <ContainerDetails
      color={Colors[pokemons?.colorType]}
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
              color={Colors[type?.type?.name]}
            >
              {type?.type?.name}
            </Pills>
          ))}
        </TypePills>
        <Title color={Colors[pokemons?.colorType]}>
          <h2>About</h2>
        </Title>
        <GridInfo>
          <GridInfoCell>
            <PokeMeasures>
              <GiWeight fontSize={'32px'} />
              <p>{(pokemons.weight * 100) / 1000} kg</p>
            </PokeMeasures>
            <Subtitle>Weigth</Subtitle>
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
        <Title color={Colors[pokemons?.colorType]}>
          <h2>Base Stats</h2>
        </Title>
        <GridStats>
          <GridStatsCell
            color={Colors[pokemons?.colorType]}
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
                  color={Colors[pokemons?.colorType]}
                >
                  <FillBarStats
                    color={Colors[pokemons?.colorType]}
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

const mapStateToProps = (state: RootStateOrAny) => ({
  pokemons: state.pokemonReducer.activePokemon,
  activePokeLoading: state.pokemonReducer.activePokeLoading,
});

export default connect(mapStateToProps)(Details);
