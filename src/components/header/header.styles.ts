import styled, { css } from 'styled-components';
import { deviceMinWidth } from 'src/styles';
interface HeaderContentProps {
  scroll: boolean;
}

export const HeaderContent = styled.header<HeaderContentProps>`
  background-color: ${props =>
    props.scroll ? 'var(--brownLight)' : 'transparent'};
  box-shadow: ${props =>
    props.scroll ? '0 4px 8px 0 rgba(0, 0, 0, 0.2)' : 'none'};
  transition: background-color 0.5s ease;
  position: fixed;
  top: 0; /* Stick it to the top */
  max-height: 70px;
  width: 100vw;
  color: ${props => (props.scroll ? 'var(--brownDark)' : 'white')};
  z-index: 99;
  display: flex;
  img {
    width: 50px;
    border-radius: 16px;
  }
`;

export const LogoContent = styled.div`
  text-align: center;
  padding: 10px;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 30px;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 13px;
`;
