import * as pokemonActions from '../../store/actions/pokemonAction';
import {
  ContainerCard,
  IdPokemon,
  ImgPokemon,
  NamePokemon,
} from './Card.style';

const Card = (pokemon: any) => {
  return (
    <ContainerCard>
      <IdPokemon
        color={pokemonActions.setPokemonColor(pokemon.obj.type[0].type.name)}
      >{`#${String(pokemon.obj.id).padStart(3, '0')}`}</IdPokemon>
      <ImgPokemon
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.obj.id}.png`}
        alt={pokemon.obj.name}
      />
      <NamePokemon
        color={pokemonActions.setPokemonColor(pokemon.obj.type[0].type.name)}
      >
        {pokemon.obj.name}
      </NamePokemon>
    </ContainerCard>
  );
};
export default Card;
