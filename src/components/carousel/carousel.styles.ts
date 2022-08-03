import { deviceMinWidth } from '../../styles/devices';
import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 20vh;
  height: 100vh;
  .swiper {
    width: 90%;
    @media ${deviceMinWidth.laptopS} {
      width: 70%;
    }
    height: 600px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background-color: var(--grayMedium);
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export const Card = styled.div`
  padding: 10px;
  img {
    width: 300px;
    height: 300px;
  }
`;

export const CardBody = styled.div`
  text-align: center;
`;

export const Name = styled.p`
  color: var(--black);
  font-size: 50px;
  font-family: var(--font-third);
`;
