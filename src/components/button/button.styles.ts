import styled from 'styled-components';
import { deviceMinWidth } from '../../styles';

export const Content = styled.button<{ dark?: boolean }>`
  background-color: ${props =>
    props.dark ? 'var(--black)' : 'var(--brownLight)'};
  cursor: pointer;
  color: ${props => (props.dark ? 'var(--grayLight)' : 'var(--black)')};
  border: solid ${props => (props.dark ? 'var(--black)' : 'var(--brownLight)')};
  transition: all 0.5s ease;
  border-radius: 16px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  :hover {
    background-color: ${props =>
      props.dark ? 'var(--black)' : 'var(--brown)'};
    color: ${props => (props.dark ? 'var(--grayLight)' : 'var(--black)')};
  }
`;

export const Text = styled.h1`
  margin: 10px;
  @media ${deviceMinWidth.desktopS} {
    margin: 10px 40px;
  }
`;
