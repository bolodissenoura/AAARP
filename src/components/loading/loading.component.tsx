import React from 'react';

import { Container } from './loading.styles';

interface ILoadingProps {
  fullScreen?: boolean;
  withBackground?: boolean;
}

export const Loading = (props: ILoadingProps) => {
  return (
    <Container
      {...props}
      fullScreen={props.fullScreen}
      withBackground={props.withBackground}
    >
      <div className='lds-spinner'>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </Container>
  );
};
