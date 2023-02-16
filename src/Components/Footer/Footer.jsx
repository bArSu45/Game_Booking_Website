import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaGofore } from 'react-icons/fa'
import style from './Footer.module.css'
export default function Footer({ colorMode }) {
    return (
        <Box id={style.footer_mainDiv}>
            <Box id={style.footer_mainDiv1} color='#082032'>
                <Heading id={style.footer_head}>Get In Touch</Heading>
                <Heading id={style.footer_head1}>You can reach out to us at</Heading>
                <Box display='flex' justifyContent='center' alignItems='center' marginTop='20px'>
                    <FaGofore />
                    &nbsp; <p>playgamebookgame@gmail</p>
                </Box>

                <Box display='flex' justifyContent='center' alignItems='center' marginTop='20px'>
                    <FaPhone />
                    &nbsp; <p>99999999999</p>
                </Box>
            </Box>
            <Box id={style.footer_mainDiv2} backgroundColor='#334756'>
                <Box id={style.footer_aDiv}>
                    <a href='' target='_blank' rel="noreferrer"><FaTwitter /></a>
                    <a href='' target='_blank' rel="noreferrer"> <FaInstagram /></a>
                    <a href='' target='_blank' rel="noreferrer"><FaFacebook /></a>
                    <a href='' target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a href='' target='_blank' rel="noreferrer"><FaGithub /> </a>
                </Box>
            </Box>
            <Box id={style.footer_mainDiv3} backgroundColor='orangered'><p>Created By Play | © 2022. All Rights Reserved</p></Box>
        </Box>
    )
}
