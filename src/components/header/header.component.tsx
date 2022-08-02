import React from 'react';
import * as S from './header.styles';

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
      <S.LogoContent></S.LogoContent>
    </S.HeaderContent>
  );
}
