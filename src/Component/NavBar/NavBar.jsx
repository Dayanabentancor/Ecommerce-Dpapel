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
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (


        <Flex className="navBar" justify={'space-between'} align={'center'} height={'10vh'} w={'100%'}>
            <Heading className="logo" ml={1} mt={0} ><Link to={ '/'}><img src="/src/assets/mi-logo.svg" alt="logo" /></Link></Heading>
            <Menu>
                <MenuButton as={Button} rightIcon={<FaCaretDown />}>
                    Menu
                </MenuButton>
                <MenuList>
                    <MenuItem><Link to={'/categorias/Packaging'}>Packaging</Link></MenuItem>
                    <MenuItem><Link to={'/categorias/Identidad Visual'}>Identidad Visual</Link></MenuItem>
                    <MenuItem><Link to={'/categorias/Productos Digitales'}>Productos Digitales</Link></MenuItem>

                </MenuList>
            </Menu>



            <CartWidget />
        </Flex>

    )
}

export default NavBar
