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
        <S.TransitionContent>
          <S.Grid>
            <S.Col>
              <h1>Adote um cachorrinho!</h1>
              <p>
                Diversos amigos estão esperando a sua visita neste exato
                momento. Você não pode deixar de conhece-los. Clique no botão
                abaixo e entre em contato com nosso time para disponibilizarmos
                seu novo amigo.
              </p>
              {/* <C.Button text='Adotar' /> */}
            </S.Col>
            <S.Col>
              <h1>Seja um padrinho de pet!</h1>
              <p>
                Para apadrinhar um cão clique no botão abaixo, escolha qualquer
                um dos cachorrinhos da nossa associação e nos envie uma mensagem
                para apadrinhar e ajudar com uma quantia mensal para ajudar na
                alimentação e medicação.
              </p>
            </S.Col>
          </S.Grid>
        </S.TransitionContent>
      </S.SecondContainer>

      <h1>Home</h1>
    </>
  );
}
