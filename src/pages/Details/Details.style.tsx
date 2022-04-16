import styled from 'styled-components';

export const ContainerDetails = styled.div`
  width: 700px;
  background-color: #a8a77a;
  border-radius: 12px;
  padding: 20px;
  margin-top: 50px;
  box-shadow: 0px 8px 16px 4px rgba(0, 0, 0, 0.25);
`;

export const HeaderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 20px;
  color: #fff;
  text-transform: capitalize;
`;

export const ContainerStats = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  padding: 100px 20px 20px 20px;
`;

export const ImgPokeball = styled.img`
  width: 350px;
  margin-left: 310px;
  position: absolute;
  z-index: 1;
`;

export const DivPokemon = styled.div`
  height: 290px;
`
export const ImgPokemon = styled.img`
  position: absolute;
  max-width: 400px;
  margin-left: calc(290px/2);
  z-index: 100;
`;

export const Titles = styled.div`
  text-align: center;
  color: '';
`

export const GridInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 30px 0;
`



