import styled, { css } from 'styled-components';

import { AppTheme } from 'src/setup';

interface IContainer {
  fullScreen?: boolean;
  withBackground?: boolean;
}

const containerModifiers = {
  fullScreen: () => css`
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  `,
  withBackground: (theme: AppTheme) => css`
    background-color: ${theme.background};
  `,
};

export const Container = styled.div<IContainer>`
  ${({ fullScreen, withBackground, theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${fullScreen && containerModifiers.fullScreen}
    ${withBackground && containerModifiers.withBackground(theme)}
    
    .lds-spinner {
      color: ${theme.white};
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-spinner div {
      transform-origin: 40px 40px;
      animation: lds-spinner 1.2s linear infinite;
    }
    .lds-spinner div:after {
      content: ' ';
      display: block;
      position: absolute;
      top: 8px;
      left: 37px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #fff;
    }
    .lds-spinner div:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -0.7s;
    }
    .lds-spinner div:nth-child(2) {
      transform: rotate(45deg);
      animation-delay: -0.6s;
    }
    .lds-spinner div:nth-child(3) {
      transform: rotate(90deg);
      animation-delay: -0.5s;
    }
    .lds-spinner div:nth-child(4) {
      transform: rotate(135deg);
      animation-delay: -0.4s;
    }
    .lds-spinner div:nth-child(5) {
      transform: rotate(180deg);
      animation-delay: -0.3s;
    }
    .lds-spinner div:nth-child(6) {
      transform: rotate(225deg);
      animation-delay: -0.2s;
    }
    .lds-spinner div:nth-child(7) {
      transform: rotate(270deg);
      animation-delay: -0.1s;
    }
    .lds-spinner div:nth-child(8) {
      transform: rotate(315deg);
      animation-delay: 0s;
    }

    @keyframes lds-spinner {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `}
`;
