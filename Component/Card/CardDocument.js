import React from 'react'
import styled from "styled-components"
import { DiGoogleDrive } from 'react-icons/Di';
import Link from 'next/link';


const StyledCont = styled.div`
box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
margin:30px 0px;
  padding: 16px;
  border-radius: 8px;
  width: 280px;
  height: auto;
  background-color: white;
  border:1px solid #ced4da;
  display: flex;
  align-items: center;
  flex-direction: column;
  a{
width: 100%;
display:flex;
align-items: center;
justify-content:center;
  }
  transition: 1s;
  &:hover{
  transition: 1s;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  }
`
const StyledBtn = styled.button`
display:flex;
flex-direction: column;
align-items: center;
font-size: 16px;
font-weight: 400;
border:none;
color:white;
width: 90%;
padding:5px;
border-radius: 8px;
cursor: pointer;
border-radius: 100px;
background: var(--m-3-sys-light-primary, #78ae17);
`
const StyledLink = styled(Link)`
text-decoration: none;
display: inline-flex;
height: 40px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;
flex-shrink: 0;
`

const CardDocument = () => {

    const fileLink = 'https://docs.google.com/document/d/1WiOJP1aE3EcjFtlnoPtd26bju0dbJW69/edit?usp=sharing&ouid=105049717607981766933&rtpof=true&sd=true';

  return (
    <StyledCont>
      <h2>Política turística</h2>
      <StyledLink href={fileLink} download>
        <StyledBtn><DiGoogleDrive/> Leer</StyledBtn>
      </StyledLink>
    </StyledCont>
  )
}

export default CardDocument