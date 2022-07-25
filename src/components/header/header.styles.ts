import styled, { css } from 'styled-components';

interface HeaderContentProps {
  scroll: boolean;
}

export const HeaderContent = styled.header<HeaderContentProps>`
  background-color: ${props => (props.scroll ? 'var(--white)' : 'transparent')};
  position: fixed;
  height: 80px;
  width: 100%;
`;

export const LogoContent = styled.div`
  padding: 10px;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 38px;
  color: white;
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: var(--white);
`;
