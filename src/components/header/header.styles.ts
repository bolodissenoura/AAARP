import styled, { css } from 'styled-components';
import { deviceMinWidth } from 'src/styles';
interface HeaderContentProps {
  scroll: boolean;
}

export const HeaderContent = styled.header<HeaderContentProps>`
  background-color: ${props =>
    props.scroll ? 'var(--grayLight)' : 'transparent'};
  box-shadow: ${props =>
    props.scroll ? '0 4px 8px 0 rgba(0, 0, 0, 0.2)' : 'none'};
  transition: background-color 0.5s ease;
  position: fixed;
  top: 0; /* Stick it to the top */
  max-height: 70px;
  width: 100vw;
  display: grid;
  grid-template-areas: 'logo nav';
`;

export const LogoContent = styled.div`
  padding: 10px;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 38px;
  color: white;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: var(--white);
`;
