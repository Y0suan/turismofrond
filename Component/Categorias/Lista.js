import React from 'react'
import Item from '../Card/Item'

const Lista = ({heladerias}) => {
  return (
    <div>
        {heladerias?.map((natural) => (
              <Item key={natural._id} {...natural} />
            ))}
    </div>
  )
}

export default Lista