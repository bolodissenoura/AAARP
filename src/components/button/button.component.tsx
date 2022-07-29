import React from 'react';
import * as S from './button.styles';

interface ButtonPropsInterface {
  text: string;
}

export function Button(props: ButtonPropsInterface) {
  return (
    <S.Content>
      <S.Text>{props.text}</S.Text>
    </S.Content>
  );
}
