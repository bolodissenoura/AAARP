import styled from 'styled-components';
import { deviceMinWidth } from '../../styles';

export const Content = styled.button<{ dark?: boolean }>`
  background-color: transparent;
  cursor: pointer;
  color: ${props => (props.dark ? 'var(--black)' : 'var(--grayLight)')};
  border: solid ${props => (props.dark ? 'var(--black)' : 'var(--grayLight)')};
  transition: all 0.5s ease;

  :hover {
    background-color: ${props =>
      props.dark ? 'var(--black)' : 'var(--grayLight)'};
    color: ${props => (props.dark ? 'var(--grayLight)' : 'var(--black)')};
  }
`;

export const Text = styled.h1`
  margin: 10px;
  @media ${deviceMinWidth.desktopS} {
    margin: 10px 40px;
  }
`;
