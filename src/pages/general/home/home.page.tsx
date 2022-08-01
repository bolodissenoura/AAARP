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
          <S.AboutUsFirstContainer>
            <C.Title text='Sobre Nossa Associação' />
            <C.SubTitle
              text='Somos uma organização de ajuda a animais em situação de rua e
            desabrigados, fundada em 2012, pelo nosso amigo e voluntário
            Virgílio Martins. Desde que começamos com este trabalho, nosso
            objetivo é ajudar o máximo possível de cães. Nós os resgatamos,
            vacinamos, vermigugamos, desparasitamos, damos uma estadia digna e
            tentamos dar uma família a todos.'
            />
          </S.AboutUsFirstContainer>
          <S.AboutUsSecondContainer>
            <S.ColText>
              <C.Title text='Sobre Nossa Associação' />
              <C.SubTitle
                text='Somos uma organização de ajuda a animais em situação de rua e
            desabrigados, fundada em 2012, pelo nosso amigo e voluntário
            Virgílio Martins. Desde que começamos com este trabalho, nosso
            objetivo é ajudar o máximo possível de cães. Nós os resgatamos,
            vacinamos, vermigugamos, desparasitamos, damos uma estadia digna e
            tentamos dar uma família a todos.'
              />
            </S.ColText>
            <S.Col>
              <S.UsImg
                src='../../../../public/assets/img/us.png'
                alt='Fotografia com um grupo de pessoas de nossa organização'
              />
            </S.Col>
          </S.AboutUsSecondContainer>
        </S.AboutUsContainer>
      </S.SecondContainer>
      <S.ThirdContainer>
        <S.ToAdopteContainer>
          <C.Title text='APADRINHE UM CÃOZINHO' />
          <C.SubTitle text='O apadrinhamento pet é uma bela opção para quem ainda não pode ter um pet em casa ou não consegue aumentar a família no momento, mas morre de vontade de ajudar ONGs que atuam na área de proteção animal. ' />
          <S.ToAdopteImg
            src='../../../../public/assets/img/dogo1.png'
            alt='Fotografia com um grupo de pessoas de nossa organização'
          />
          <C.Button dark text='Clique aqui e tenha um novo afilhado' />
        </S.ToAdopteContainer>
      </S.ThirdContainer>

      <h1>Home</h1>
    </>
  );
}
