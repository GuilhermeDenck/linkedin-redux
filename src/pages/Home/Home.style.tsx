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

export const ContainerFind = styled.div`
  width: 100%;
  padding: 20px 40px;
`;

export const InputFind = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 100%;
  height: 40px;
  padding: 0 15px;
  font-size: large;

  ::placeholder {
    text-align: center;
    font-size: medium;
  }
`;

export const ContainerPokemons = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  align-items: center;
  justify-items: center;
  width: 100%;
  padding: 20px;
  list-style: none;
`;

export const CardPokemon = styled.li`
  border: 3px solid ${(({color}) => color)};
  border-radius: 8px;
`;

export const BtnPokemon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 8px;
  width: 200px;
  height: 190px;
  padding: 10px;
  cursor: pointer;
`;
