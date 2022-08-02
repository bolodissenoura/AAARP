import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 20vh;
  height: 100vh;
  .swiper {
    width: 50%;
    height: 500px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background-color: white;
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
  }
`;

export const Card = styled.div`
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
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
