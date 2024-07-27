import React from 'react'
import UseCounter from '../../hooks/UseCounter'
import { Button } from '@chakra-ui/react'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, incrementar, decrementar } = UseCounter(initialValue, stock)

  return (
    <div>
        <button onClick={decrementar}>-</button>
        <span>{count}</span>
        <button onClick={incrementar}>+</button>
        <Button  onClick={() => onAdd(count)} variant='solid' color='#628A66'>
              Agregar al carrito
            </Button>
       
    </div>
  )
}

export default ItemCount
