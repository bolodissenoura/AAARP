import React from 'react';
import * as S from './transitionBox.styles';

export function TransitionBox() {
  return (
    <S.TransitionContent>
      <S.Grid>
        <S.Col>
          <h1>Adote um cachorrinho!</h1>
          <p>
            Diversos amigos estão esperando a sua visita neste exato momento.
            Você não pode deixar de conhece-los. Clique no botão abaixo e entre
            em contato com nosso time para disponibilizarmos seu novo amigo.
          </p>
          {/* <C.Button text='Adotar' /> */}
        </S.Col>
        <S.Col>
          <h1>Seja um padrinho de pet!</h1>
          <p>
            Para apadrinhar um cão clique no botão abaixo, escolha qualquer um
            dos cachorrinhos da nossa associação e nos envie uma mensagem para
            apadrinhar e ajudar com uma quantia mensal para ajudar na
            alimentação e medicação.
          </p>
        </S.Col>
      </S.Grid>
    </S.TransitionContent>
  );
}
