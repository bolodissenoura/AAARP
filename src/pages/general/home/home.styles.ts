import styled from 'styled-components';
import img from '/assets/img/bkg-1.png';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${img});
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Divider = styled.div`
  padding-top: 100px;
`;
