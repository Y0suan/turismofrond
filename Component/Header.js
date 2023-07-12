import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components';
import Center from './Center'


import { RiMenu2Line } from 'react-icons/ri';

const StyledHeader = styled.div`

`
const Logo = styled(Link)`
text-decoration:none; 
position:relative;
z-index:3;
img{
  width: 10rem;
}
@media screen and (min-width:768px){
  img{
  width: 16rem;
 }
}
`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding:24px 0;
flex-wrap: wrap;
`

const StyledNav = styled.nav`
${props => props.mobileNavActive ? `
display: block;
`: `
display: none;
` }
z-index: 1;
gap:16px;
position:fixed;
top:0;
bottom:0;
left: 0;
right:0;
padding: 80px 30px 20px;
background-color: white;
@media screen and (min-width:768px){
  display: flex;
  position: static;
  padding: 0;
  background-color: white;
}
`

const NavLink = styled(Link)`
display:block;
text-decoration: none;
color:#aaa;
padding:10px 0; 
@media screen and (min-width:768px){
  padding:0;
}
`
const NavButton = styled.button`
border: none;
background-color:transparent;
color:#aaa;
cursor:pointer;
width:50px;
height:50px;
font-size: 24px;
position:relative;
z-index:3;
@media screen and (min-width:768px){
  display: none;
}
`

const Header = () => {
  const [mobileNavActive , setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
        <Center>
            <Wrapper>
            <Logo href={'/'} >  <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/icon%2Flogo.png?alt=media&token=3e72026c-d7da-4476-a09a-a8c6605ccfaa&_gl=1*1ms8xlq*_ga*MTg2NDc4NDEzMC4xNjc2MjgwOTk0*_ga_CW55HF8NVT*MTY4NTUzMTg0MS44LjEuMTY4NTUzMTg4OC4wLjAuMA.."></img></Logo>
        <StyledNav mobileNavActive={mobileNavActive} >
            <NavLink href={'/'} >Inicio</NavLink>
            <NavLink href={'/Atractivos'} >Atractivos</NavLink>
            <NavLink href={'/Actividades'} >Actividades</NavLink>
            <NavLink href={'/Alojamiento'} >Alojamiento</NavLink>
            <NavLink href={'/Gastronomia'} >Gastronomia</NavLink>
            <NavLink href={'/Imperdible'} >Imperdible</NavLink>
        </StyledNav>
        <NavButton onClick={ () => setMobileNavActive(prev => !prev)} >
          <RiMenu2Line/>
        </NavButton>
            </Wrapper>
        </Center>
    </StyledHeader>
  )
}

export default Header