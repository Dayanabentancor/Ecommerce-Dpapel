import { useState } from 'react'

import './App.css'
import ItemListContainer from './Component/ItemListConteiner/ItemListContainer'
import NavBar from './Component/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)



  return (

    <ChakraProvider>
      
      <BrowserRouter>
      <NavBar/>
    <Routes>
      
      <Route path='/' element={ <ItemListContainer/>} />
      <Route path='/categorias/:categoryId' element={ <ItemListContainer/>} />
    </Routes>
      </BrowserRouter>
      </ChakraProvider>
     
 
  )
}

export default App
