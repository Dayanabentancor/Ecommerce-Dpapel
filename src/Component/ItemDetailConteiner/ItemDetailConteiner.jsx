import React from 'react'
import { getProductById } from '../../Data/AsyncMock'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { RiseLoader } from 'react-spinners'


const ItemDetailConteiner = () => {
    const [ product, setProduct ] = useState({})
    const { productId } = useParams()
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        getProductById(productId)
        .then((data) => setProduct(data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    },[])

  return (
    <Box>
        {
            loading ?
            <Flex justify={'center'} align={'center'} h={'50vh'}>
            <RiseLoader  color="#628A66"  size={8} />
            </Flex>

            :
            <Flex justify={'center'} align={'center'} h={'90vh'}>
                    <ItemDetail {...product} />
                </Flex>


}
</Box>

)
}
export default ItemDetailConteiner
