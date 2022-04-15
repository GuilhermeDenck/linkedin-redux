import styled from 'styled-components';
import { pokecolor } from '../../components/colors';

export const ContainerDetails = styled.div`
  width: 600px;
  background-color: ${props => pokecolor.grass};
  border-radius: 12px;
  padding: 5px
`;

export const HeaderDetails = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContainerStats = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 8px;
`
