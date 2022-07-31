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
        <C.TransitionBox />
        <S.AboutUsContainer>
          <C.Title text='Sobre Nossa Associação' />
          <C.SubTitle
            text='Somos uma organização de ajuda a animais em situação de rua e
            desabrigados, fundada em 2012, pelo nosso amigo e voluntário
            Virgílio Martins. Desde que começamos com este trabalho, nosso
            objetivo é ajudar o máximo possível de cães. Nós os resgatamos,
            vacinamos, vermigugamos, desparasitamos, damos uma estadia digna e
            tentamos dar uma família a todos.'
          />
        </S.AboutUsContainer>
      </S.SecondContainer>

      <h1>Home</h1>
    </>
  );
}
