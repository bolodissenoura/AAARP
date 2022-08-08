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
      <S.ContentHome>
        <S.Container>
          <S.Divider />
          <S.ContentCTA>
            <S.TitleCTA>SOMOS A.A.A.R.P</S.TitleCTA>
            <S.SubTitleCTA>
              Amigos dos Animais <br /> de Ribeirão Preto
            </S.SubTitleCTA>
            <S.SocialMedias>
              <a href='https://www.instagram.com/amigosdosanimaisribeiraopreto/'>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className='iconSocial instagram'
                />
              </a>
              <a href='https://www.facebook.com/amigosdosanimaisribeiraopreto/'>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className='iconSocial facebook'
                />
              </a>
              <a href='https://api.whatsapp.com/send?phone=5516981278303'>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className='iconSocial whatsapp'
                />
              </a>
            </S.SocialMedias>
            <a
              href='https://api.whatsapp.com/send?phone=5516981278303'
              target='_blank'
            >
              <C.Button dark text='QUERO DOAR AGORA' />
            </a>
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
            vacinamos, vermifugamos, desparasitamos, damos uma estadia digna e
            tentamos dar uma família a todos.'
                />
              </S.ColText>
            </S.AboutUsSection>
            <S.AboutUsSection data-aos='fade-in' data-aos-easing='ease-in-out'>
              <S.ColText>
                <C.Title text='Quando adotar' />
                <C.SubTitle text='Queremos cada vez mais que nossos resgatados sejam adotados, mas adotar um animal é uma atitude que não deve ser impulsiva. E não deve ser vista como caridade. Pelo contrário, exige muita responsabilidade. Nós protetores fazemos o possível para dar atenção, amor e todos os cuidados necessários, mas com cada vez mais animais abandonados, o número de animais protegidos cresce e esses bichinhos acabam recebendo menos atenção e amor do que precisam e merecem. Além disso, muitas pessoas quando pedem nossa ajuda dizem que vão ajudar no custeio do animal mas acabam nem lembrando da sua existência. 😓' />
              </S.ColText>
              <S.Col>
                <S.UsImg
                  src='https://i.postimg.cc/ZRTNmHcL/adotar.jpg)](https://postimg.cc/R3DhQc23'
                  alt='Banner escrito Importância de adotar'
                />
              </S.Col>
            </S.AboutUsSection>
          </S.AboutUsContainer>
        </S.SecondContainer>
        <C.ParallaxSection image='https://i.postimg.cc/VLf3YNF9/rescue-dog-enjoying-being-pet-by-woman-at-shelter.jpg' />
        <S.ThirdContainer>
          <S.ToPatreonContainer
            data-aos='fade-in'
            data-aos-easing='ease-in-out'
          >
            <C.Title text='APADRINHE UM CÃOZINHO' />
            <C.SubTitle text='O apadrinhamento pet é uma bela opção para quem ainda não pode ter um pet em casa ou não consegue aumentar a família no momento, mas morre de vontade de ajudar ONGs que atuam na área de proteção animal. ' />
            <S.ToAdopteImg
              data-aos='fade-in'
              data-aos-easing='ease-in-out'
              src='https://i.im.ge/2022/08/01/FPbvjf.dogzin-1.png'
              alt='Fotografia com um grupo de pessoas de nossa organização'
            />
            <a
              href='https://api.whatsapp.com/send?phone=5516981278303'
              target='_blank'
            >
              <C.Button dark text='Escolha seu afilhado' />
            </a>
          </S.ToPatreonContainer>
        </S.ThirdContainer>
        <C.ParallaxSection image='https://images.unsplash.com/photo-1557962677-ed384f42904d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80' />

        <S.FourthContainer>
          <S.ToAdopteContainer data-aos='fade-in' data-aos-easing='ease-in-out'>
            <C.Title text='NÃO COMPRE, ADOTE' />
            <C.SubTitle text='O apadrinhamento pet é uma bela opção para quem ainda não pode ter um pet em casa ou não consegue aumentar a família no momento, mas morre de vontade de ajudar ONGs que atuam na área de proteção animal. ' />
            <FontAwesomeIcon icon={faArrowDown} color='gray' />
          </S.ToAdopteContainer>
          <C.Carousel />
          <C.ParallaxSection image='https://images.unsplash.com/photo-1553884013-03f90870e856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'>
            <S.ContentCTA>
              <S.TitleCTA>
                Você pode ajudar de várias formas <br /> além da doação em
                dinheiro.
              </S.TitleCTA>
              <S.SubTitleCTA>
                SALVE VIDAS. <br />
                Junte-se
              </S.SubTitleCTA>
              <a
                href='https://api.whatsapp.com/send?phone=5516981278303'
                target='_blank'
              >
                <C.Button dark text='QUERO AJUDAR' />
              </a>
              <S.Divider />
            </S.ContentCTA>
            <C.DonationSection />
          </C.ParallaxSection>
          <C.InstagramFeed />
        </S.FourthContainer>
      </S.ContentHome>
      <C.Footer />
    </>
  );
}
