import React from 'react'
import styled from 'styled-components';
import Center from './Center';
import Link from 'next/link'



const ExploraCont = styled.div`

`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding:24px 0;
flex-wrap: wrap;

`
const Atajos = styled(Link)`
display:flex;
align-items: start;
text-decoration: none;
color:#101010;
h4{
    margin: 0px 8px;
}
img{
    width: 70px;
    height: 70px;
    border-radius: 8px;
}
`

const Explora = () => {
  return (
    <ExploraCont>
        <Center>
            <h2>Nuestra Gastronomia</h2>
            <Wrapper>
                <Atajos href={'/'} >
                    <img src='https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1037&q=80' ></img>
                    <h4>Cafe</h4>
                </Atajos>
            </Wrapper>
        </Center>
    </ExploraCont>
  )
}

export default Explora