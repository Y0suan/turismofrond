import React from 'react'
import styled from 'styled-components'
import Card from './Card/Card'
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';
import CardImperdible from './Card/CardAtomic';


const StyledNaturales = styled.div`
background-color: white;
width: 100%;
background-color: #80b918;
padding-bottom: 16px;
border-top: 5px solid #55a630;
`
const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
gap:16px;
flex-wrap: wrap;
`

const Center = styled.div`
max-width: auto;
margin:16px auto;
padding:0 24px;
h2{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin:2rem;
  margin-bottom: 32px;
  color:white;
  text-transform:uppercase;
  font-size: 2rem;
  font-weight: bold;
  p{
    padding-left:8px;
    text-transform: lowercase;
    font-weight:300;
  }
}
`
const Subtitle = styled.div`
  margin:0;
  color:#2563eb;
`
const ArrowLink = styled(Link)`
  margin:0;
  color:#2563eb;
  display: flex;
  align-items: center;
  .icon{
  color:#2563eb;
  }
`



const Gastronomia = ({naturales}) => {
  return (
    <StyledNaturales>
        <Center>
          {/* <Subtitle>Eldorado Misiones</Subtitle> */}
          <h2>Imperdibles: <p>Productos unicos eldoradenses</p>
          </h2>
            <Wrapper>
              {naturales.map((natural) => (
              <CardImperdible key={natural._id} {...natural} />
              ))}
            </Wrapper>
        </Center>
    </StyledNaturales>
  )
}

export default Gastronomia
