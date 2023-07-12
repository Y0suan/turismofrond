import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'

import { FiFacebook } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';


const StyledCard = styled.div`
  /* -webkit-box-shadow: 3px 5px 33px -9px rgba(66, 68, 90, 1);
  -moz-box-shadow: 3px 5px 33px -9px rgba(66, 68, 90, 1);
  box-shadow: 3px 5px 33px -9px rgba(66, 68, 90, 1); */
  padding: 8px;
  border-radius: 8px;
  width: 280px;
`;

const ImgCont = styled.div`
  overflow: hidden;
  border-radius: 8px;
  width: 280px;
  height: 280px;

  img {
    height: 100%;
  }
`;

const Text = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  h4 {
    margin: 8px;
  }
  div {
    display: flex;
    gap: 8px;
  }
  p{
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
width: 100%;
display: flex;
justify-content: end;
.icon{
  font-size: 1.2rem;
  margin-left: 8px;
}
`;

export default function CardSinDec({
  _id, title, description, price, images, wished = false,
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
    <StyledCard>
      <ImgCont>
        <img src={images?.[0]} alt={title} />
      </ImgCont>
      <Text>
        <h4>{title}</h4>
        {/* <p>{limitedDescription} <LinkInfo href={url}> Leer mas</LinkInfo> </p> */}
      </Text>
      {/* <LinkRedes>
       

      
      <FiFacebook className='icon' />
      <AiOutlineWhatsApp className='icon'/>
      <AiOutlineInstagram className='icon'/>

      </LinkRedes> */}
    </StyledCard>
  );
}
