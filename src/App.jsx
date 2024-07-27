import { useState } from 'react'

import './App.css'
import ItemListContainer from './Component/ItemListConteiner/ItemListContainer'
import NavBar from './Component/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import ItemDetailConteiner from './Component/ItemDetailConteiner/ItemDetailConteiner'
import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from './Component/PageNotFound/PageNotFound'
import { CartContextProvider } from './Context/CartContext'


function App() {
  const [count, setCount] = useState(0)

const addItem = (productToAdd, quiantity) =>{
  setrCart(productToAdd)
}

  return (


      
    
    
    <ChakraProvider>
      <CartContextProvider>

      <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route path='/' element={ <ItemListContainer title= 'Tienda' /> } />
      <Route path='/categorias/:categoryId' element={ <ItemListContainer title= 'Tienda'/>} />
      <Route path='/producto/:productoId' element={ <ItemDetailConteiner/>} />
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
      </BrowserRouter>
      </CartContextProvider>

   
      </ChakraProvider>
     
     
 
  )
}

export default App
