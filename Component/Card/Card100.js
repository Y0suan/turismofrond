import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import Center from '../Center';

export default function Card100({
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
    const limitedDescription = limitDescription(description, 50);
    
  
    return (   
    
      <StyledCard>
        <TitleCont>
            <h1>{title}</h1>
        </TitleCont>
            <ImgCont>
              <img src={images?.[0]} alt={title} />
            </ImgCont>
            <TextCont>
                <h3>{title}</h3>
                <p className='text'>{limitedDescription} <LinkInfo href={url}> Leer mas</LinkInfo> </p>
                <LinkHubi href={hubicacion} >Como llegar</LinkHubi>
            </TextCont> 
      </StyledCard> 
      
    );
  }


  const StyledCard = styled.div`
  min-width: 100%;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 50px;

  padding: 0 16px;
`;

const ImgCont = styled.div`
  width: 250px;
  overflow: hidden;
  border:1px solid #ced4da;
  padding:4px;
  border-radius: 4px;
  img{
  border-radius: 4px;
  width: 250px;
  height: 250px ;
  }
  @media screen and (min-width:768px){
  width: 350px ;
  img{
  border-radius: 4px;
  width: 350px;
  height: 350px ;
  }
  }
`;

const TitleCont = styled.div`
width: 100%;
border-top:1px solid #ced4da;
border-bottom:1px solid #ced4da;
margin-bottom: 30px;
h1{
    text-align: center;
    font-size: 32px;
    line-height: 55px;
    font-weight: normal;
    color:#1d2127;
}
`;

const TextCont = styled.div`
padding:0px 40px;
h1{
    font-size: 32px;
    line-height: 55px;
    font-weight: 500;
    color:#1d2127;
}
h2{
    font-size: 25px;
    font-weight: bolder;
}
h3{
    font-size: 20px;
    font-weight: normal;
    color:#1d2127;
}
.text{
    font-size: 14;
    font-weight: lighter;
}
p{
    max-width: 600px;
    color: #808080 ;
    margin-bottom:34px;
}
`;


const LinkInfo = styled(Link)`
text-decoration: none;
color:#78AE17;
`;


const LinkHubi = styled(Link)`
text-decoration: none;
color:white;
background-color: #80b918;
border-bottom: 3px solid #78AE17;
font-weight:bold;
padding:8px 16px;
border-radius: 4px;
transition: 0.3s;
&:hover{
    background-color: #70A215;
    border-bottom: 3px solid #608B12;
}
`;