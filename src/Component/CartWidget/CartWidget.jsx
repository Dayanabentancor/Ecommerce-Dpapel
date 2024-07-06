import { Box } from '@chakra-ui/react';
import React from 'react'
import { TiShoppingCart } from "react-icons/ti";

const CartWidget = () => {
  return (
    <Box mr={10}>
      <TiShoppingCart color='#628A66' />
    </Box>
  )
}

export default CartWidget
