import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const NotTitle = styled.h1`
  margin-bottom: 50px;
`;

export const NotButton = styled.button`
  background-color: #c22e28;
  color: #fff;
  font-size: 20px;
  width: 150px;
  padding: 10px;
  margin-top: 50px;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  :hover {
    filter: brightness(1.2);
    transition: 0.3s ease;
  }
`;
