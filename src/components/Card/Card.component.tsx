import { ContainerCard, ImgPokemon } from './Card.style';

const Card = (pokemon: any) => {
  return (
    <ContainerCard>
      <p>{`#${String(pokemon.obj.id).padStart(3, '0')}`}</p>
      <ImgPokemon
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.obj.id}.png`}
        alt={pokemon.obj.name}
      />
      <p>{pokemon.obj.name}</p>
    </ContainerCard>
  );
};
export default Card;
