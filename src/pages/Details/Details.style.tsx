import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

export const ContainerDetails = styled.div`
  width: 700px;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  padding: 15px 10px;
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
  height: 300px;
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
  min-height: 150px;
  justify-items: center;
  padding: 30px 0;
`;

export const GridInfoCell = styled.div`
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
  color: #666666;
`;

export const FlavorText = styled.div`
  padding: 20px;
`;

export const GridStats = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  margin-top: 20px;
  padding: 0 20px;
`;

export const GridStatsCell = styled.div`
  :first-child {
    text-align: right;
    font-weight: bold;
    padding-right: 10px;
    border-right: 2px solid #e0e0e0;
    color: ${(props) => props.color};
  }

  :last-child {
    padding-left: 10px;
  }
`;

export const ContainerBars = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
`;

export const NumStats = styled.div`
  width: 35px;
`;

export const BarStats = styled.div<{ color: string }>`
  background-color: ${(props) => rgba(props.color, 0.2)};
  flex-grow: 1;
  height: 6px;
  margin-left: 10px;
  border-radius: 4px;
`;

const growup = keyframes`
  from { width: 0; }
  to { transform: scalex(fit-content); }
`;

export const FillBarStats = styled.div<{ fulfill: number }>`
  background-color: ${(props) => props.color};
  height: 6px;
  width: calc((${(props) => props.fulfill}% * 100)/255);
  animation: 1s ease-in ${growup};
`;
