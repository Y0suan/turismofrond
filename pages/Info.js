import CardDocument from '@/Component/Card/CardDocument'
import CardDocument2 from '@/Component/Card/CardDocument2'
import Center from '@/Component/Center'
import Header from '@/Component/Header'
import Footer from '@/Component/footer'
import React from 'react'
import styled from "styled-components"

const StyledCont = styled.div`
width: 100%;
`
const StyledBody = styled.div`
width: 100%;
height: auto;
display:flex;
flex-direction:row;
flex-wrap: wrap;
div{
height: auto;
display:flex;
flex-wrap: wrap;
gap:8px;
}
`
const Title = styled.h1`
margin:0;
`;


const Info = () => {
  return (
    <StyledCont>
        <Header/>
        <StyledBody>
            <Center>
            <Title>
                Descarga Documentacion Adicional
            </Title>
            <div>
            <CardDocument></CardDocument>
            <CardDocument2></CardDocument2>
            </div>
            </Center>
        </StyledBody>
        <Footer/>
    </StyledCont>
  )
}

export default Info