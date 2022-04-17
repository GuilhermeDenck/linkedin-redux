import styled from 'styled-components';

export const ContainerDetails = styled.div<{ color: string }>`
  width: 700px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  padding: 20px;
  margin: 50px 0;
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
`;

export const ImgPokemon = styled.img`
  position: absolute;
  max-width: 400px;
  margin-left: calc(290px / 2);
  z-index: 100;
`;

export const TypePills = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Pills = styled.p`
  background-color: ${(props) => props.color};
  color: #fff;
  border-radius: 20px;
  padding: 3px 15px;

  :not(:first-child) {
    margin-left: 20px;
  }
`;

export const Title = styled.div`
  text-align: center;
  color: ${(props) => props.color};
`;

export const GridInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 130px;
  justify-items: center;
  padding: 30px 0;
`;

export const GridCell = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  align-items: center;
  justify-items: center;
  text-align: center;
  width: 100%;

  :not(:last-child) {
    border-right: 2px solid #e0e0e0;
  }
`;

export const PokeMeasures = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.small`
  font-size: 12px;
`;

export const FlavorText = styled.div`
  margin-bottom: 20px;
`;
