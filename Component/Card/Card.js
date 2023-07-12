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
width: 100%;
display: flex;
justify-content: space-between;
justify-content: end;
.icon{
  color: black;
  font-size: 1.2rem;
  margin-left: 8px;
}
`;

export default function Card({
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
    <StyledCard>
      <ImgCont>
      <LinkInfo href={url}>
        <img src={images?.[0]} alt={title} />
        <h4>{title}</h4>
      </LinkInfo>  
      </ImgCont>
      <Text>
        {/* <h4>{title}</h4> */}
        <p>{limitedDescription} <LinkInfo href={url}> Leer mas</LinkInfo> </p>
      </Text>
      <LinkRedes>
       

      
      <Link href={facebook} > <FiFacebook className='icon' /></Link>
      {/* <Link href={'/'} ><AiOutlineWhatsApp className='icon'/></Link>  */}
      <Link href={instagram}><AiOutlineInstagram className='icon'/></Link>
      <Link href={hubicacion} ><FiMapPin className='icon'/></Link>

      </LinkRedes>
    </StyledCard>
  );
}
