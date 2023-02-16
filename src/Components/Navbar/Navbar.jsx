import { Box, Button, Heading, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import style from "./Navbar.module.css"
import { GrCart } from "react-icons/gr"
import { Link } from 'react-router-dom'
import { HamburgerIcon } from "@chakra-ui/icons";
export default function Navbar() {
    return (
        <div>
            <Box id={style.nav}>
            <Box id={style.nav1}>
                <Box id={style.logo_div}>
                    <Link to="/">
                        <img src="./logo.png" alt="" />
                    </Link>

                </Box>
                <Link to="/games">
                <Heading id={style.game_head}>Games</Heading>
                </Link>
            </Box>
            <Box id={style.nav2}>
                <Link to='/cart' ><Box id={style.cart_logo}><GrCart fontSize='36px' /></Box></Link>
                <Link to="/login">
                    <Heading className={style.nav_headings}>Log In</Heading>
                </Link>
                <Link to="/signup">
                    <Heading className={style.nav_headings}>Sign Up</Heading>
                </Link>
            </Box>
        </Box>

<div id={style.mob_nav}>
<Menu>
    <MenuButton
        color='#243D25'
        backgroundColor="#FEF5ED"
        as={Button}
        rightIcon={< HamburgerIcon />}
    />
    <MenuList color='#243D25'
        backgroundColor="#FEF5ED" >
        <Link smooth to='#Home'>
            <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' color='#243D25'>
                Home
            </MenuItem>
        </Link>
        <Link smooth to='#Skills'>
            <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' color='#243D25'>
                Skills
            </MenuItem>
        </Link>
        <Link smooth to='#Projects'>
            <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' color='#243D25'>
                Projects
            </MenuItem>
        </Link>
        <Link smooth to='#About'>
            <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' color='#243D25'>
                About
            </MenuItem>
        </Link>
        <Link smooth to='#Contact'>
            <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' color='#243D25'>
                Contact
            </MenuItem>
        </Link>
    </MenuList>
</Menu>
</div>
        </div>
    )
}
