import { Box } from '@chakra-ui/react';
import React from 'react'
import { TiShoppingCart } from "react-icons/ti";

const CartWidget = () => {
  return (
    <Box mr={10}>
      <TiShoppingCart />
    </Box>
  )
}

export default CartWidget
