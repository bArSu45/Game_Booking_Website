import { Box, Button, Heading, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useState } from 'react'
import style from "./Navbar.module.css"
import { GrCart } from "react-icons/gr"
import { Link } from 'react-router-dom'
import { HamburgerIcon } from "@chakra-ui/icons";
export default function Navbar({ isAuth, setIsAuth, userName, setUserName }) {



    const HandleLogout = () => {
        localStorage.setItem('isAuth', false);
        setIsAuth(false)
        localStorage.setItem('userName', '')
        setUserName('')
    }

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
                    {
                        isAuth && userName !== '' ? <Box><Heading cursor={'pointer'} onClick={HandleLogout} className={style.nav_headings}>{userName}</Heading></Box>
                            : <Box display={'flex'} >
                                <Link to="/login">
                                    <Heading className={style.nav_headings}>Log In</Heading>
                                </Link>
                                <Link to="/signup">
                                    <Heading className={style.nav_headings}>Sign Up</Heading>
                                </Link>
                            </Box>
                    }
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
                        <Link to='/'>
                            <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' color='#243D25'>
                                Home
                            </MenuItem>
                        </Link>
                        <Link to='/games'>
                            <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' color='#243D25'>
                                Games
                            </MenuItem>
                        </Link>
                        <Link to='/cart'>
                            <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' color='#243D25'>
                                Cart
                            </MenuItem>
                        </Link>
                        <Link to='/login'>
                            <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' color='#243D25'>
                                Login
                            </MenuItem>
                        </Link>
                        <Link to='/signup'>
                            <MenuItem fontSize={{ base: '20px', md: '25px', lg: '25px' }} fontWeight='bold' color='#243D25'>
                                Signup
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </div>
        </div>
    )
}
