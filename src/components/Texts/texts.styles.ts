import styled from 'styled-components';
import { deviceMinWidth } from '../../styles';

export const Title = styled.h2`
  color: var(--black);
  font-size: 50px;
  font-family: var(--font-third);
  padding-bottom: 20px;
  @media ${deviceMinWidth.desktopS} {
    font-size: 100px;
  }
`;

export const Subtitle = styled.p`
  color: var(--black);
  opacity: 0.8;
  font-family: var(--font-secondary);
  font-size: 15px;
`;
