import React from 'react'
import styled from 'styled-components'

const Item = ({
    _id, title, description, price,facebook,
    hubicacion,instagram,images, wished = false,
    onRemoveFromWishlist = () => { },
  }) => {
  return (
    <div>
        {title}
    </div>
  )
}

export default Item