import React, { createContext, useState } from 'react'

const Context = createContext()

export const CartContextProvider = ({children}) => {
    const [ cart, setCart] = useState([])
    const addItem = (productToAdd, quantity) =>{ 
        setCart(productToAdd, quantity)
    }

  return (
    <Context.Provider
    value={{
        addItem

    }}>
        {children}
        </Context.Provider>

   
  ) 
}

export default Context
