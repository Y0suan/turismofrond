import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const  ContLink = styled(Link)`
    text-decoration: none;
   
p{
    align-items: center;
    padding : 8px 16px ;
    margin: 0;
    color:#222222;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;

}
:hover{
    font-weight: 600;
    border-left: 2px solid #222222 ;
    }
`



const Links = ({
    _id, title, description, price, images, wished = false,
    onRemoveFromWishlist = () => { },
  }) => {

  const url = '/product/' + _id;


  return (
    <ContLink href={url} >
        <p>{title}</p>
    </ContLink>
  )
}

export default Links
