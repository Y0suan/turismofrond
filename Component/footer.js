import Link from 'next/link';
import React from 'react';
import { BiLogoFacebook, BiLogoInstagram, BiLogoWhatsapp } from 'react-icons/bi';
import styled from 'styled-components';


const Footer = () => {
  return (
    <FootCont>
        <img src='https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/icon%2Flogo.png?alt=media&token=3e72026c-d7da-4476-a09a-a8c6605ccfaa&_gl=1*1ms8xlq*_ga*MTg2NDc4NDEzMC4xNjc2MjgwOTk0*_ga_CW55HF8NVT*MTY4NTUzMTg0MS44LjEuMTY4NTUzMTg4OC4wLjAuMA..'></img>
        <ContLink>
            <NavLink href={'/Atractivos'} >Atractivos</NavLink>
            <NavLink href={'/Actividades'} >Actividades</NavLink>
            <NavLink href={'/Alojamiento'} >Alojamiento</NavLink>
            <NavLink href={'/Gastronomia'} >Gastronomia</NavLink>
            <NavLink href={'/Imperdible'} >Imperdible</NavLink>
        </ContLink> 
        <ContLink>
            <IconLink href={'/'} ><BiLogoFacebook/></IconLink>
            <IconLink href={'/'} ><BiLogoInstagram/></IconLink>
            <IconLink href={'/'} ><BiLogoWhatsapp/></IconLink>
        </ContLink>   
    </FootCont>
  )
}

export default Footer


const FootCont = styled.footer`
box-shadow: inset 0px 10px 15px -3px rgba(0,0,0,0.1);
padding: 24px;
padding-top:50px;
background-color: white;
display:flex;
flex-direction: column;
align-items: center;
gap:24px;

img{
    width: 300px;
}
`;
const ContLink = styled.div`
padding:16px;
border-top:1px solid #ced4da;
border-bottom:1px solid #ced4da;
display: flex;
gap: 8px;
flex-wrap:wrap;
`;
const NavLink = styled(Link)`
text-decoration: none;
font-size: 16px;
color:#333333;
transition: 0.5s;
&:hover{
    color:#75A917;
}
`;
const IconLink = styled(Link)`
text-decoration: none;
font-size: 24px;
color:#333333;
`;