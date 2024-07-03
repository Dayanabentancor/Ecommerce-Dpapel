import { Center, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getProducts } from '/src/Data/AsyncMock'
import ItemList from '../ItemLIst/ItemList'

const ItemListContainer = ({title}) => {
   const [productos, setProductos ] = useState ([])

   useEffect(()=>{
 
    getProducts()
    .then((prod) => setProductos(prod))
    .catch((error) => console.log(error))
   }, [])
   


  
  return (
    <Center>
        <Heading>{title}</Heading>
      <ItemList productos={productos}/>
    </Center>

   
    
  
  )
}

export default ItemListContainer
