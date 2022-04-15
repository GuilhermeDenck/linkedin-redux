import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerPokemons = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: fit-content;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 12px;
  margin-top: 40px;
  list-style: none;
`;

export const ImgPokemon = styled.img`
  max-width: 150px;
`;
