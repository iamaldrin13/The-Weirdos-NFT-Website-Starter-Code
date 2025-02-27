import React from 'react'
import styled from 'styled-components'
import ConfettiComponent from '../Confetti';

import img1 from '../../assets/Nfts/Aesir2.png';
import img2 from '../../assets/Nfts/Aesir4.png';
import img3 from '../../assets/Nfts/Aesir3.png';
import img4 from '../../assets/Nfts/Aesir1.png';
import img5 from '../../assets/Nfts/Head.png';
import img6 from '../../assets/Nfts/Mod1.png';
import img7 from '../../assets/Nfts/Mod2.png';
import img8 from '../../assets/Nfts/Mod3.png';
import img9 from '../../assets/Nfts/Mod4.png';


const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.body};
position: relative;
`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;

@media (max-width: 40em) {
  font-size: ${(props) => props.theme.fontxl};
}

`

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em) {
  width: 80%;
}

@media (max-width: 48em) {
  width: 90%;
  justify-content: center;
}
`

const Item = styled.div`
width: calc(20rem-4vw);
padding: 1rem 1rem;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index: 5; //places the items on top
justify-content: center;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;


&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}

@media (max-width: 30em) {
  
  width: 100%;
}
`


const ImageContainer = styled.div`
width: 20rem;
margin: 0 auto;
background-color: ${props => props.theme.carouselColor};
border: 1px solid ${props => props.theme.text};
padding: 1rem 1rem 1rem;

border-radius: 20px;
cursor: pointer;



img{
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
}

`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => `rgba(${props.theme.bodyRgba}, 0.9)`};
font-weight: 600;
margin-top: 1rem;
`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize ;
color: ${props => `rgba(${props.theme.bodyRgba}, 0.7)`};
font-weight: 400;
`

//const Row = styled.div`
///* background-color: lightblue; */
//white-space: nowrap;
//box-sizing: content-box;
//margin: 1rem auto;
//display: flex;
//
//`

const MemberComponent = ({img, name = " ", position = " "}) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}


const Team = () => {
  return (
    <Section id= "team">
      <ConfettiComponent />
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name= <a href="https://twitter.com/forgottennft_" target="_blank" rel="noopener noreferrer">Freya</a> position="Developer & Founder" />
        <MemberComponent img={img2} name= <a href="https://twitter.com/Misseysi01" target="_blank" rel="noopener noreferrer">Misseysi</a> position="Lead Artist & Co-founder" />
        <MemberComponent img={img3} name= <a href="https://twitter.com/forgottennft_" target="_blank" rel="noopener noreferrer">NeverForget</a> position="Marketing & Network" />
        <MemberComponent img={img4} name= <a href="https://twitter.com/angela_artsph" target="_blank" rel="noopener noreferrer">Angela</a> position="Lead Artist" />
        <MemberComponent img={img5} name= <a href="https://twitter.com/NotifyOne" target="_blank" rel="noopener noreferrer">One</a> position="Head Moderator" />
        <MemberComponent img={img6} name= <a href="https://twitter.com/kousoke_nft" target="_blank" rel="noopener noreferrer">Kousoke</a> position="Moderator & Games Manager" />
        <MemberComponent img={img7} name= <a href="https://twitter.com/ItsQueenza" target="_blank" rel="noopener noreferrer">Queenza</a> position="Moderator & Events Manager" />
        <MemberComponent img={img8} name= <a href="https://twitter.com/Washappii23" target="_blank" rel="noopener noreferrer">HappyVV</a> position="Moderator & Collab Manager" />
        <MemberComponent img={img9} name= <a href="https://twitter.com/maikie_nft" target="_blank" rel="noopener noreferrer">Maikie</a> position="Moderator & Collab Manager" />
      </Container>
    </Section>
  )
}

export default Team