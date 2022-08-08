import styled from 'styled-components';
import { deviceMinWidth } from '../../styles';

export const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: var(--brownLight);
`;

export const Title = styled.h1`
  padding-top: 80px;
  text-align: center;
  font-size: 36px;

  font-family: var(--font-secondary);
`;

export const Chave = styled.h1`
  padding-top: 80px;
  text-align: center;
  font-size: 16px;
  @media ${deviceMinWidth.tabletL} {
    font-size: 36px;
  }
  font-family: var(--font-secondary);
`;

export const Center = styled.div`
  padding-top: 50px;
  text-align: center;
  margin: auto;
  img {
    width: 400px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  }
`;

export const Img = styled.div`
  width: 300px;
  height: 200px;
  background-image: url('https://i.postimg.cc/4yksj69Q/aa.png');
  padding-top: 50px;
  text-align: center;
  margin: auto;
`;

export const Button = styled.button`
  background-color: #00d861;
  font-size: 36px;
  padding: 10px;
  border-radius: 16px;
  color: var(--black);
  border: none;
  font-family: var(--font-third);
  cursor: pointer;
  margin-bottom: 50px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;
