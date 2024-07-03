import { Box } from '@chakra-ui/react'
import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
    
  return (
    <Box>
      {
        productos.map((prod) => (
            <Box key={prod.id}>
                <Item {...prod} />
            </Box>

        ))
      }
    </Box>
  )
}

export default ItemList
