import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import style from "./Login.module.css"

export default function Login({ isAuth, setIsAuth, userName, setUserName }) {

    const toast = useToast();
    const navigate = useNavigate();
    const [users, SetUsers] = useState([]);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const HandleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setFormData({ ...formData, [name]: value })
    }

    const HandleSubmit = () => {

        if (formData.email && formData.password) {

            let count = 0;

            users.filter((el) => {
                if (el.email === formData.email && el.password === formData.password) {
                    localStorage.setItem('userName', el.name)
                    setUserName(el.name)
                    setIsAuth(true)
                    return count++;
                } else {
                    return null;
                }

            });

            if (count > 0) {
                localStorage.setItem('isAuth', true)

                toast({
                    duration: 2500,
                    status: "success",
                    title: "Success",
                    description: 'Login Successfull, Lets go to the HomePage',
                    position: 'top'
                })
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            } else {
                toast({
                    duration: 2500,
                    status: "error",
                    title: "Error",
                    description: 'Somthing went wrong',
                    position: 'top'
                })
            }
        } else {
            toast({
                duration: 2500,
                status: "warning",
                title: "Error",
                description: 'Somthing is Missing',
                position: 'top'
            })
        }
    }

    useEffect(() => {
        axios.get(`https://play-game-api.onrender.com/users`)
            .then((r) => {
                SetUsers(r.data)
            })
            .catch(r => console.log(r))
    }, [])

    return (
        <Box id={style.login_main}>
            <div id={style.logo_div}>
                <img src="./logo.png" alt="" />
            </div>
            <Box id={style.login_form}>
                <FormControl>
                    <FormLabel fontSize='30px' color='orangered' fontWeight="600">Email*</FormLabel>
                    <Input fontSize='30px' fontWeight="600" name='email' color="#718096" value={formData.email} onChange={HandleChange} type="text" placeholder='Enter your Email' />
                    <FormLabel fontSize='30px' color='orangered' fontWeight="600">Password*</FormLabel>
                    <Input fontSize='30px' fontWeight="600" name='password' color="#718096" value={formData.password} onChange={HandleChange} type="text" placeholder='Enter your Password' />

                    <Button id={style.btn} onClick={HandleSubmit} >LOG IN</Button>
                </FormControl>
            </Box>
        </Box>
    )
}
