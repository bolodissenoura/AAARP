import styled from 'styled-components';
import { deviceMinWidth } from '../../styles';

export const TransitionContent = styled.div`
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: var(--grayLight);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-top: -60px;
  width: 80vw;
  height: 250px;
  overflow-y: scroll;
`;

export const SecondContainer = styled.div`
  background-color: var(--grayLight);
  height: 100vh;
  width: 100vw;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  @media ${deviceMinWidth.tabletL} {
    margin: 0 150px;
  }
  @media ${deviceMinWidth.desktopS} {
    margin: 0 150px;
  }
`;

export const Col = styled.div`
  h1 {
    font-size: 12px;
    margin-bottom: 10px;
    @media ${deviceMinWidth.tabletL} {
      font-size: 20px;
    }
    @media ${deviceMinWidth.desktopS} {
      font-size: 30px;
    }
  }
  h1:before {
    content: '>> ';
    color: var(--brownDark);
    font-size: 16px;
  }
  p {
    font-size: 10px;
    @media ${deviceMinWidth.tabletL} {
      font-size: 15px;
    }
    @media ${deviceMinWidth.desktopS} {
      font-size: 20px;
    }
  }

  max-width: 500px;
  padding: 30px;
`;
