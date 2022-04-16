import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 100%;
  height: 100%;
`;

export const IdPokemon = styled.p`
  text-align: right;
  color: ${({ color }) => color};
`;
export const NamePokemon = styled.p`
  text-transform: capitalize;
`;

export const ImgPokemon = styled.img`
  max-width: 150px;
  max-height: 120px;
`;
