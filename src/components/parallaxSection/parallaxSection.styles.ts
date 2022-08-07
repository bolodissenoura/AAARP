import styled from 'styled-components';

export const Container = styled.div<{ image: string }>`
  height: 500px;
  width: 100%;
  background-image: url(${props => props.image});
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
