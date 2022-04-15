import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 960px;
  background-color: #f7f7f7;
  border-radius: 12px;
  margin-top: 50px;
`;

export const ContainerPokemons = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
  align-items: center;
  justify-items: center;
  width: 100%;
  padding: 20px;
  list-style: none;
`;

export const ImgPokemon = styled.img`
  max-width: 150px;
  max-height: 120px;
`;

export const CardPokemon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 8px;
  width: 200px;
  height: 190px;
  padding: 10px;
`
