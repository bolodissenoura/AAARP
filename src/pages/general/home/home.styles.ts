import styled from 'styled-components';
import img from '/assets/img/bkg-1.png';
import { deviceMinWidth } from '../../../styles';

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

export const TitleCTA = styled.div`
  color: var(--grayLight);
  font-weight: 600;
  text-align: center;
  font-size: 26px;
  z-index: 1;

  margin-top: 50vw;
  margin-bottom: 100px;
  @media ${deviceMinWidth.tabletM} {
    font-size: 40px;
    margin-top: 20vw;
  }
  @media ${deviceMinWidth.desktopS} {
    margin-top: 10vw;
  }
`;

export const ContentButton = styled.div`
  text-align: center;
`;

export const AboutUsContainer = styled.div`
  padding-top: 200px;
`;

export const TitleAboutUsContainer = styled.div`
  padding-top: 200px;
`;

export const SecondContainer = styled.div`
  background-color: var(--grayLight);
  height: 100vh;
  width: 100vw;
`;
