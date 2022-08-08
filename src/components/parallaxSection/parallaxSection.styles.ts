import styled from 'styled-components';
import { deviceMinWidth } from '../../styles';

export const Container = styled.div<{ image: string }>`
  min-height: 500px;
  width: 100%;
  background-image: url(${props => props.image});
  /* Create the parallax scrolling effect */
  @media ${deviceMinWidth.tabletL} {
    background-attachment: fixed;
  }

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
