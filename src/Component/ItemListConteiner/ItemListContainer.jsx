import { Center, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getProducts } from '/src/Data/AsyncMock'
import ItemList from '../ItemLIst/ItemList'
import { getProductsByCategory } from '../../Data/AsyncMock'
import { useParams } from 'react-router-dom'



const ItemListContainer = ({title}) => {
   const [productos, setProductos ] = useState ([])
   const {categoryId } = useParams()
   

   useEffect(()=>{
    

    const dataproductos = categoryId ? getProductsByCategory(categoryId) :getProducts()
 
    dataproductos
    .then((prod) => setProductos(prod))
    .catch((error) => console.log(error))
    
   }, [categoryId])
   


  
  return (
    <Flex direction={'column'} justify={'center'} align={'center'}>
        <Heading color="#628A66" >{title}</Heading>
        
         <ItemList productos={productos} />
        
    </Flex>

       
 

   
    
  
  )
}

export default ItemListContainer
