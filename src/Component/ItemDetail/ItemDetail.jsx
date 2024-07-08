
import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Button, ButtonGroup, Divider, Image, } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ nombre, descripcion, id, img, precio, stock}) => {

    
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
            <Button variant='solid' color='#628A66'>
              Agregar al carrito
            </Button>
           
            <ItemCount initialValue={1} stock={stock} size='sm'/>
          </ButtonGroup>
        </CardFooter>
      </Card>     
 
  )
}

export default ItemDetail
