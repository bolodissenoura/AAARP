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

export const AboutUsFirstContainer = styled.div`
  text-align: center;
  max-width: 700px;
  padding: 20px;
  margin: 0 auto;
`;

export const AboutUsSecondContainer = styled.div`
  padding-top: 60px;
  padding: 20px;
  text-align: center;

  @media ${deviceMinWidth.laptopS} {
    margin: 0 auto;
    display: grid;
    text-align: unset;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
  }
`;

export const Col = styled.div``;

export const ColText = styled.div`
  padding-bottom: 40px;
  @media ${deviceMinWidth.laptopS} {
    padding-right: 20px;
  }
  @media ${deviceMinWidth.desktopS} {
    margin-left: 340px;
  }
`;

export const UsImg = styled.img`
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media ${deviceMinWidth.laptopS} {
    width: 400px;
  }
  @media ${deviceMinWidth.desktopS} {
    width: 600px;
  }
`;

export const ToAdopteContainer = styled.div`
  text-align: center;
  max-width: 700px;
  padding: 20px;
  padding-top: 80px;
  margin: 0 auto;
`;

export const TitleAboutUsContainer = styled.div`
  padding-top: 200px;
`;

export const ToAdopteImg = styled.img`
  width: 200px;

  @media ${deviceMinWidth.laptopS} {
    width: 400px;
  }
  @media ${deviceMinWidth.desktopS} {
    width: 600px;
  }
`;

export const SecondContainer = styled.div`
  background-color: var(--grayLight);
  width: 100vw;
`;

export const ThirdContainer = styled.div`
  background-color: var(--grayMedium);
  width: 100vw;
`;
