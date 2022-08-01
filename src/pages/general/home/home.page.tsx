import React from 'react';
import * as C from '../../../components';
import * as S from './home.styles';

export function Home() {
  return (
    <>
      <C.Header />
      <S.Container>
        <S.Divider />
        <S.ContentCTA>
          <S.TitleCTA>SOMOS A.A.A.R.P</S.TitleCTA>
          <S.SubTitleCTA>
            Amigos dos Animais <br /> de Ribeirão Preto
          </S.SubTitleCTA>

          <C.Button dark text='QUERO DOAR AGORA' />
        </S.ContentCTA>
      </S.Container>
      <S.SecondContainer>
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
                src='https://i.im.ge/2022/08/01/FPbJWm.273918019-640089133892350-1361259389972939677-n-2.png'
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
            src='https://i.im.ge/2022/08/01/FPbvjf.dogzin-1.png'
            alt='Fotografia com um grupo de pessoas de nossa organização'
          />
          <C.Button dark text='Clique aqui e tenha um novo afilhado' />
        </S.ToAdopteContainer>
      </S.ThirdContainer>
      <S.FourthContainer>
        <S.Divider />
        <S.TitleCTA>
          Com apenas R$1,00 você ajuda centenas de peludinhos
        </S.TitleCTA>

        <C.Button text='Quero Doar' />
      </S.FourthContainer>

      <h1>Home</h1>
    </>
  );
}
