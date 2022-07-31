import styled from 'styled-components';

export const Content = styled.button`
  width: 300px;
  cursor: pointer;
  color: var(--grayLight);
  border: solid var(--grayLight);
  background-color: transparent;
  transition: all 0.5s ease;

  :hover {
    background-color: var(--grayLight);
    color: var(--black);
  }
`;

export const Text = styled.h1`
  margin: 10px;
`;
