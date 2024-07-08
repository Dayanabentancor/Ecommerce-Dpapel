import { useState } from 'react'

import './App.css'
import ItemListContainer from './Component/ItemListConteiner/ItemListContainer'
import NavBar from './Component/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import ItemDetailConteiner from './Component/ItemDetailConteiner/ItemDetailConteiner'

function App() {
  const [count, setCount] = useState(0)



  return (

    <ChakraProvider>
      
      <BrowserRouter>
      <NavBar/>
    <Routes>
      
      <Route path='/' element={ <ItemListContainer title= 'Tienda'/>} />
      <Route path='/categorias/:categoryId' element={ <ItemListContainer title= 'Tienda'/>} />
      <Route path='/producto/:productoId' element={ <ItemDetailConteiner/>} />
    </Routes>
      </BrowserRouter>
      </ChakraProvider>
     
 
  )
}

export default App
