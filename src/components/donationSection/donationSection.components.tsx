import React from 'react';
import * as S from './donationSection.styles';

export function DonationSection() {
  function CopyCNPJ() {
    navigator.clipboard.writeText('amigosdosanimaisrp@hotmail.com');
  }
  return (
    <S.Container>
      <S.Title>Doações :</S.Title>

      <S.Center>
        <img
          src='https://i.postimg.cc/4yksj69Q/aa.png'
          alt='imagem com chave pix'
        />
      </S.Center>
      <S.Chave>
        CHAVE PIX EMAIL: <br /> amigosdosanimaisrp@hotmail.com{' '}
      </S.Chave>
      <S.Center>
        <S.Button onClick={() => CopyCNPJ()}>COPIAR CHAVE</S.Button>
      </S.Center>
    </S.Container>
  );
}
