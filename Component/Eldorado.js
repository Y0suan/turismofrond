import React from 'react'
import styled from 'styled-components';
import Center from './Center';
import Link from 'next/link'

import { FiMapPin } from 'react-icons/fi';

const StyledEldo = styled.div`

`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
`

const Bg = styled.div`
position: relative;
padding:4px;
width: 90%;
height: 70vh;
background-size:cover ;
border-radius: 8px;
overflow: hidden;
border:1px solid #ced4da;
.img{
   width:100%;
   height: 100%;
   border-radius: 8px;
   background-image: url('https://res.cloudinary.com/dzqdjsrez/image/upload/v1688427232/agenda-next-panel/vg8jakgr8u0oj0xw8xge.jpg') ;
   background-size: cover;
}
`

const ConteLink = styled.div`
border-radius: 8px;
width: 20%;
background-color: white;
position: absolute;
bottom:30px;
left: 0;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
padding:24px;
/* -webkit-box-shadow: 3px 5px 33px -9px rgba(66, 68, 90, 1);
-moz-box-shadow: 3px 5px 33px -9px rgba(66, 68, 90, 1);
box-shadow: 3px 5px 33px -9px rgba(66, 68, 90, 1); */
img{
   width: 100%;
}
p{
   font-weight: 500;
   color:#2563eb;
}
`
const LinkCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
h4{
    margin:0;
}
`

const LinkDis = styled(Link)`
margin-top: 8px;
color:gray;
text-decoration: none;
display:flex;
align-items: center;
`
const Btn = styled(Link)`
text-decoration: none;
background-color: #1F2022;
color:white;
padding: 8px 16px;
border-radius: 8px;
`

const SuperTitle = styled.div`
position: relative;
display: flex;
gap:8px;
width: 100%;
display: flex;
justify-content: center;

h1{
   z-index: 1;
   background-color: white;
}
.claro{
   font-weight: 300;
   color: #1d2127 ;
}
div{
   top:50%;
   position:absolute;
   width: 100%;
   height: 5px;
   background-color:#ced4da;
}
`

const Eldorado = () => {
  return (
    <StyledEldo>
    <Center>
            <Wrapper>
               <SuperTitle>
                 <div></div> <h1 className='claro'>Descubri</h1><h1>Eldorado</h1>
               </SuperTitle>
                <Bg>
                  <div className='img'></div>
                </Bg>
                <ConteLink>
                <img src="https://firebasestorage.googleapis.com/v0/b/intercolegiales-7e519.appspot.com/o/icon%2Flogo.png?alt=media&token=3e72026c-d7da-4476-a09a-a8c6605ccfaa&_gl=1*1ms8xlq*_ga*MTg2NDc4NDEzMC4xNjc2MjgwOTk0*_ga_CW55HF8NVT*MTY4NTUzMTg0MS44LjEuMTY4NTUzMTg4OC4wLjAuMA.."></img>
                {/* <p>Disfruta de la Naturaleza</p> */}
                </ConteLink>
            </Wrapper>
</Center>  
    </StyledEldo>
  )
}

export default Eldorado