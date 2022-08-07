import React from 'react';
import * as S from './parallaxSection.styles';

interface ParallaxSectionPropsInterface {
  image: string;
  children?: React.ReactNode;
}

export function ParallaxSection(props: ParallaxSectionPropsInterface) {
  return <S.Container image={props.image}>{props?.children}</S.Container>;
}
