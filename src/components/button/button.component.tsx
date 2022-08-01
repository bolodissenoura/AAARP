import React from 'react';
import * as S from './button.styles';

interface ButtonPropsInterface {
  text: string;
  dark?: boolean;
}

export function Button(props: ButtonPropsInterface) {
  return (
    <S.Content dark={props.dark}>
      <S.Text>{props.text}</S.Text>
    </S.Content>
  );
}
