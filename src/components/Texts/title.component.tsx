import React from 'react';
import * as S from './texts.styles';

interface TitlePropsInterface {
  text: string;
}

export function Title(props: TitlePropsInterface) {
  return <S.Title>{props.text}</S.Title>;
}
