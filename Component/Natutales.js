import React from 'react'
import styled from 'styled-components'
import Card from './Card/Card'
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';


const StyledNaturales = styled.div`
background-color: white;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
gap:16px;
flex-wrap: wrap;
`

const Center = styled.div`
max-width: auto;
margin:100px auto;
padding:0 24px;
h2{
  display: flex;
  align-items: center;
  margin:8px;
  margin-bottom: 16px;
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



const Natutales = ({naturales}) => {
  return (
    <StyledNaturales>
        <Center>
          <Subtitle>Un Pequeño tour por la Ciudad</Subtitle>
          <h2>Los Mejores Lugares De Eldorado
            <ArrowLink href={'/Atractivos'} >
            <MdOutlineArrowForwardIos className='icon' />
            </ArrowLink>
          </h2>
            <Wrapper>
              {naturales.map((natural) => (
              <Card key={natural._id} {...natural} />
              ))}
            </Wrapper>
        </Center>
    </StyledNaturales>
  )
}

export default Natutales