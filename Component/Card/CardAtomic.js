import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'

import { FiFacebook } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';



const StyledCard = styled.div`
  /* -webkit-box-shadow: 3px 5px 33px -9px rgba(66, 68, 90, 1);
  -moz-box-shadow: 3px 5px 33px -9px rgba(66, 68, 90, 1);
  box-shadow: 3px 5px 33px -9px rgba(66, 68, 90, 1); */
  padding: 4px;
  border-radius: 8px;
  width: 280px;
  background-color: white;
  border:1px solid #ced4da;
`;

const ImgCont = styled.div`
  overflow: hidden;
  border-radius: 6px;
  width: 280px;
  height: 280px;
  position:relative;
  transition: 1s;
  img {
    height: 100%;
  }
  h4{
    background-color: rgba(0,0,0,0.5914740896358543);
    color:white;
    padding:8px;
    bottom:20px;
    position: absolute;
    text-transform: uppercase;
    z-index: 1;
  }
  .hover{
    top:0px;
    right: 0;
    background-color: #80b918;
  }
  :hover{
    transition: 1s;
    img{
      height: 110%;
    }
    .hover{
    top:10px;
    right: 0;
    background-color: #80b918;
  }
  }

`;

const Text = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  h4 {
    text-transform: uppercase;
    margin: 8px;
  }
  div {
    display: flex;
    gap: 8px;
  }
  p{
    padding:4px;
    overflow: hidden;
    color:gray;
    font-size: 14px;
  }
`;

const LinkInfo = styled(Link)`
text-decoration: none;
color:#2563eb;
`;

const LinkRedes= styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: red;
position: absolute;
z-index:1;
top:-50px;
right: 0;
border-bottom-left-radius: 6px;
.icon{
  color: white;
  font-size: 1.2rem;
  padding:16px;
}

`;

export default function CardImperdible({
  _id, title, description, price,facebook,
  hubicacion,instagram,images, wished = false,
  onRemoveFromWishlist = () => { },
}) {
  const url = '/product/' + _id;
  const [isWished, setIsWished] = useState(wished);

  function addToWishlist(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    const nextValue = !isWished;
    setIsWished(nextValue);
    if (!nextValue && onRemoveFromWishlist) {
      onRemoveFromWishlist(_id);
    }
  }

  function limitDescription(description, limit) {
    const words = description.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return description;
  }
  const limitedDescription = limitDescription(description, 20);
  

  return (
    <StyledCard >
      <ImgCont>
      <LinkInfo href={url}>
        <img src={images?.[0]} alt={title} />
        </LinkInfo> 
        <h4>{title}</h4>
        <LinkRedes className='hover'>
       <Link href={hubicacion} ><FiMapPin className='icon'/></Link>
       </LinkRedes>

      </ImgCont>

    </StyledCard>
  );
}

  