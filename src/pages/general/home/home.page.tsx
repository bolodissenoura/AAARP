import React from 'react';
import * as C from '../../../components';
import * as S from './home.styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export function Home() {
  React.useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <>
      <C.Header />
      <S.Container>
        <S.Divider />
        <S.ContentCTA>
          <S.TitleCTA>SOMOS A.A.A.R.P</S.TitleCTA>
          <S.SubTitleCTA>
            Amigos dos Animais <br /> de Ribeirão Preto
          </S.SubTitleCTA>
          <S.SocialMedias>
            <FontAwesomeIcon
              icon={faInstagram}
              className='iconSocial instagram'
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className='iconSocial facebook'
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              className='iconSocial whatsapp'
            />
          </S.SocialMedias>

          <C.Button dark text='QUERO DOAR AGORA' />
        </S.ContentCTA>
      </S.Container>
      <S.SecondContainer>
        <S.AboutUsContainer>
          <S.AboutUsSection data-aos='fade-in' data-aos-easing='ease-in-out'>
            <S.Col>
              <S.UsImg
                src='https://i.im.ge/2022/08/01/FPbJWm.273918019-640089133892350-1361259389972939677-n-2.png'
                alt='Fotografia com um grupo de pessoas de nossa organização'
              />
            </S.Col>
            <S.ColText>
              <C.Title text='Sobre Nossa Associação' />
              <C.SubTitle
                text='Somos uma organização de ajuda a animais em situação de rua e
            desabrigados, fundada em 2012, pelo nosso amigo e voluntário
            Virgílio Martins. Desde que começamos com este trabalho, nosso
            objetivo é ajudar o máximo possível de cães. Nós os resgatamos,
            vacinamos, vermigugamos, desparasitamos, damos uma estadia digna e
            tentamos dar uma família a todos.'
              />
            </S.ColText>
          </S.AboutUsSection>
          <S.AboutUsSection data-aos='fade-in' data-aos-easing='ease-in-out'>
            <S.ColText>
              <C.Title text='Sobre Nossa Associação' />
              <C.SubTitle
                text='Somos uma organização de ajuda a animais em situação de rua e
            desabrigados, fundada em 2012, pelo nosso amigo e voluntário
            Virgílio Martins. Desde que começamos com este trabalho, nosso
            objetivo é ajudar o máximo possível de cães. Nós os resgatamos,
            vacinamos, vermigugamos, desparasitamos, damos uma estadia digna e
            tentamos dar uma família a todos.'
              />
            </S.ColText>
            <S.Col>
              <S.UsImg
                src='https://i.im.ge/2022/08/01/FPbJWm.273918019-640089133892350-1361259389972939677-n-2.png'
                alt='Fotografia com um grupo de pessoas de nossa organização'
              />
            </S.Col>
          </S.AboutUsSection>
        </S.AboutUsContainer>
      </S.SecondContainer>
      <S.ThirdContainer>
        <S.ToPatreonContainer data-aos='fade-in' data-aos-easing='ease-in-out'>
          <C.Title text='APADRINHE UM CÃOZINHO' />
          <C.SubTitle text='O apadrinhamento pet é uma bela opção para quem ainda não pode ter um pet em casa ou não consegue aumentar a família no momento, mas morre de vontade de ajudar ONGs que atuam na área de proteção animal. ' />
          <S.ToAdopteImg
            data-aos='fade-in'
            data-aos-easing='ease-in-out'
            src='https://i.im.ge/2022/08/01/FPbvjf.dogzin-1.png'
            alt='Fotografia com um grupo de pessoas de nossa organização'
          />
          <C.Button dark text='Escolha seu afilhado' />
        </S.ToPatreonContainer>
      </S.ThirdContainer>
      <S.FourthContainer>
        <S.ToAdopteContainer data-aos='fade-in' data-aos-easing='ease-in-out'>
          <C.Title text='NÃO COMPRE, ADOTE' />
          <C.SubTitle text='O apadrinhamento pet é uma bela opção para quem ainda não pode ter um pet em casa ou não consegue aumentar a família no momento, mas morre de vontade de ajudar ONGs que atuam na área de proteção animal. ' />
          <FontAwesomeIcon icon={faArrowDown} color='gray' />
        </S.ToAdopteContainer>
        <C.Carousel />
      </S.FourthContainer>
    </>
  );
}
