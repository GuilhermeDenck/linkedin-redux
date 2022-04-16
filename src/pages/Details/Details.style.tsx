import styled from 'styled-components';

export const ContainerDetails = styled.div`
  width: 600px;
  background-color: ${(({color}) => color)};
  border-radius: 12px;
  padding: 10px;
  margin-top: 50px;
`;

export const HeaderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 10px;
  color: #fff;
  text-transform: capitalize;
`;

export const ContainerStats = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 8px;
`;
