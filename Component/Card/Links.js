import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const  ContLink = styled(Link)`
    text-decoration: none;
   
p{
    align-items: center;
    display:flex;
    padding : 8px 16px ;
    margin: 0;
    color:#222222;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
   
}
:hover{
    p{
        border-left: 3px solid blue;
        background-color:blue;
    }
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
