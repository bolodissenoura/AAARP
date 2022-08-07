import React from 'react';
import * as S from './parallaxSection.styles';

interface ParallaxSectionPropsInterface {
  image: string;
}

export function ParallaxSection(props: ParallaxSectionPropsInterface) {
  return <S.Container image={props.image}></S.Container>;
}
