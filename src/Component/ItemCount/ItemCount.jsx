import React from 'react'
import UseCounter from '../../hooks/UseCounter'

const ItemCount = ({initialValue, stock}) => {
    const { count, incrementar, decrementar } = UseCounter(initialValue, stock)

  return (
    <div>
        <button onClick={decrementar}>-</button>
        <span>{count}</span>
        <button onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount
