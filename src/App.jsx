import { useState } from 'react'

import './App.css'
import ItemListContainer from './Component/ItemListConteiner/ItemListContainer'
import NavBar from './Component/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <ItemListContainer title= 'Tienda'/>
      {/* <div>
       
       </div> */}
      {/* <h1>Vite + React</h1>
      <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
      </button>
      <p>
      Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      </div>
      <p className="read-the-docs">
      Click on the Vite and React logos to learn more
      </p> */}
      <ChakraProvider></ChakraProvider>
    </>
  )
}

export default App
