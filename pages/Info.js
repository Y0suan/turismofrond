import CardDocument from '@/Component/Card/CardDocument'
import Center from '@/Component/Center'
import Header from '@/Component/Header'
import Footer from '@/Component/footer'
import React from 'react'
import styled from "styled-components"

const StyledCont = styled.div`

`
const StyledBody = styled.div`
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
            <CardDocument></CardDocument>
            </Center>
        </StyledBody>
        <Footer/>
    </StyledCont>
  )
}

export default Info