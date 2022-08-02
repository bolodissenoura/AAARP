import React from 'react';
import * as S from './carousel.styles';
import { Virtual, Navigation, Pagination, FreeMode, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// install Virtual module

export function Carousel() {
  return (
    <>
      <S.Container>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 900,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide>
            <S.Card>
              <img src='https://i.im.ge/2022/08/03/FC32AT.dog1.png' alt='' />
              <S.CardBody>
                <S.Name>Billy</S.Name>
              </S.CardBody>
            </S.Card>
          </SwiperSlide>
          <SwiperSlide>
            <S.Card>
              <img src='https://i.im.ge/2022/08/03/FC32AT.dog1.png' alt='' />
              <S.CardBody>
                <S.Name>Billy</S.Name>
              </S.CardBody>
            </S.Card>
          </SwiperSlide>
          <SwiperSlide>
            <S.Card>
              <img src='https://i.im.ge/2022/08/03/FC32AT.dog1.png' alt='' />
              <S.CardBody>
                <S.Name>Billy</S.Name>
              </S.CardBody>
            </S.Card>
          </SwiperSlide>
        </Swiper>
      </S.Container>
    </>
  );
}
