
import React, { useContext } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, ButtonGroup, Divider, Image, } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';

const ItemDetail = ({ nombre, descripcion, id, img, precio, stock}) => {
const {addItem} = useContext(Context)
  const onAdd = (quantity) => {
    const Item ={
      id,
      nombre,
      precio
    }
    addItem(Item, quantity)
    toast(`Agregaste ${quantity} productos`)
  }
     
  return (
    
          <Card maxW='sm' m={5} >
        <CardBody  maxW='sm'>
          <Image
            src={img}
            alt={nombre}
            w={'60dvh'}
            h={'40dvh'}
            objectFit={'cover'}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md' color='#628A66'>{nombre}</Heading>
           
            <Text color='#628A66' fontSize='2xl'>
              ${precio}
            </Text>
            <Text>
            Descripción: {descripcion}
        </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <ItemCount initialValue={1} stock={stock}  onAdd={onAdd} size='sm'/>
           
          </ButtonGroup>
        </CardFooter>
        <ToastContainer/>
      </Card>     
 
  )
}
           

export default ItemDetail
