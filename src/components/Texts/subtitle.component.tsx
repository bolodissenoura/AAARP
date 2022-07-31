import React from 'react';
import * as S from './texts.styles';

interface SubTitlePropsInterface {
  text: string;
}

export function SubTitle(props: SubTitlePropsInterface) {
  return <S.Subtitle>{props.text}</S.Subtitle>;
}
