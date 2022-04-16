import styled from 'styled-components';

export const ContainerDetails = styled.div`
  width: 600px;
  background-color: #A8A77A;
  border-radius: 12px;
  padding: 10px;
  margin-top: 50px;
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
  background-color: #fff;
  border-radius: 8px;
`;

export const ImgPokeball = styled.img`
  width: 300px;
  margin-left: 270px;
  position: absolute;
  z-index: 1;
`

export const ImgPokemon = styled.img`
position: relative;
  width: 200px;
  z-index: 100;
`;