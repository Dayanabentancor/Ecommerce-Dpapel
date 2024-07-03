import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { FaCaretDown } from "react-icons/fa";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Heading,
    Flex,


} from '@chakra-ui/react'
import './NavBar.css'

const NavBar = () => {
    return (


        <Flex className="navBar" justify={'space-between'} align={'center'} height={'10vh'} w={'100%'}>
            <Heading className="logo" ml={1} ><img src="/src/assets/mi-logo.svg" alt="logo" /></Heading>
            <Menu>
                <MenuButton as={Button} rightIcon={<FaCaretDown />}>
                    Menu
                </MenuButton>
                <MenuList>
                    <MenuItem>Packaging</MenuItem>
                    <MenuItem>Identidad Visual</MenuItem>
                    <MenuItem>Productos Digitales</MenuItem>

                </MenuList>
            </Menu>



            <CartWidget />
        </Flex>

    )
}

export default NavBar
