import React from 'react';
import * as C from '../../../components';
import * as S from './home.styles';

export function Home() {
  return (
    <>
      <C.Header />

      <S.Container>
        <S.Divider />
        <S.TitleCTA>
          Com apenas R$1,00 você ajuda centenas de peludinhos
        </S.TitleCTA>

        <S.ContentButton>
          <C.Button text='Quero Doar' />
        </S.ContentButton>
      </S.Container>
      <S.SecondContainer>
        <S.TransitionContent></S.TransitionContent>
      </S.SecondContainer>

      <h1>Home</h1>
    </>
  );
}
