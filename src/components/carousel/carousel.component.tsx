import React from 'react';
import * as S from './carousel.styles';
import { Virtual, Navigation, Pagination, FreeMode, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '../index';

import { contents } from './content';
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
          breakpoints={{
            640: { slidesPerView: 1 },
            1200: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className='mySwiper'
        >
          {contents.map(item => (
            <SwiperSlide key={item.id}>
              <S.Card>
                <img src={item.image} alt='' />
                <S.CardBody>
                  <S.Name>{item.text}</S.Name>
                  <Button text='ADOTAR' dark />
                  <br />
                  <br />
                  <Button text='APADRINHAR' />
                </S.CardBody>
              </S.Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Container>
    </>
  );
}
