import styled, { css } from 'styled-components';
import { deviceMinWidth } from 'src/styles';

export const FooterContent = styled.footer`
  background-color: var(--brownLight);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 70px;
  width: 100vw;
  z-index: 99;
  display: flex;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  margin: 0 auto;
  padding: 20px;
  font-size: 20px;
  font-family: var(--font-second);
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 13px;
`;
