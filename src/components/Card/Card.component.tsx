import * as pokemonActions from '../../store/actions/pokemonAction';
import Colors from '../../enums/ColorsEnums';
import {
  ContainerCard,
  IdPokemon,
  ImgPokemon,
  NamePokemon,
} from './Card.style';


const Card: React.FC<any> = ({obj}) => {
  return (
    <ContainerCard>
      <IdPokemon
        color={Colors[obj.type[0].type.name]}
      >{`#${String(obj.id).padStart(3, '0')}`}</IdPokemon>
      <div style={{ minHeight: 116 }}>
        <ImgPokemon
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${obj.id}.png`}
          alt={obj.name}
        />
      </div>
      <NamePokemon
        color={Colors[obj.type[0].type.name]}
      >
        {obj.name}
      </NamePokemon>
    </ContainerCard>
  );
}

export default Card;
