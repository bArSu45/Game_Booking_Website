import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

export default function NotFound() {
    return (
        <Box minHeight={'100vh'} display='flex' alignItems={'center'} justifyContent={'center'} backgroundColor='#082032' color={'white'} >
            <Box textAlign={'center'}>
                <Heading>404</Heading>
                <Heading>Page Not Found</Heading>
            </Box>
        </Box>
    )
}
