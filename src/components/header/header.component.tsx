import React from 'react';
import * as S from './header.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  const [navBg, setNavBg] = React.useState(false);

  const changeNavBg = React.useCallback(() => {
    window.scrollY >= 120 ? setNavBg(true) : setNavBg(false);
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    };
  }, []);

  return (
    <S.HeaderContent scroll={navBg}>
      <img src='https://i.im.ge/2022/08/02/FybXQy.logo.png' alt='' />
    </S.HeaderContent>
  );
}
