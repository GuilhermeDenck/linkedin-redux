import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 100%;
  height: 100%;
`;

export const IdPokemon = styled.p`
  text-align: right;
  color: ${({ color }) => color};
  padding: 5px;
`;
export const NamePokemon = styled.p`
  text-transform: capitalize;
  color: #fff;
  background-color: ${({ color }) => color};
  width: 100%;
  height: calc(100% - 146px);
  padding: 15px 0;
  margin: 0;
`;

export const ImgPokemon = styled.img`
  max-width: 150px;
  max-height: 110px;
`;
