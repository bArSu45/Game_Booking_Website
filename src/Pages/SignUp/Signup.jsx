import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import style from "./Signup.module.css"
export default function Signup() {
    const toast = useToast();
    const navigate = useNavigate();
    const [users, SetUsers] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const HandleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setFormData({ ...formData, [name]: value })
    }

    const HandleSubmit = async () => {



        if (formData.name && formData.email && formData.password && formData.confirmPassword) {
            let a = false
            users.forEach((el) => {
                if (el.email === formData.email) {
                    a = true
                }
            })

            if (formData.password === formData.confirmPassword) {

                if (!a) {
                    let payload = {
                        name: formData.name,
                        email: formData.email,
                        password: formData.password
                    }
                    // try {
                    //     let res = await fetch(`https://play-game-api.onrender.com/users`, {
                    //         method: "POST",
                    //         body: JSON.stringify(payload),
                    //         headers: { 'Content-Type': 'application/json' }
                    //     })
                    //     let data = await res.json();

                    //     toast({
                    //         duration: 2500,
                    //         status: "success",
                    //         title: "Success",
                    //         description: 'Signup Successfull, Please login',
                    //         position: 'top'
                    //     })
                    //     setTimeout(() => {
                    //         navigate('/login')
                    //     }, 2000);
                    // } catch (e) {
                    //     console.log(e)
                    //     toast({
                    //         duration: 2500,
                    //         status: "error",
                    //         title: "Error",
                    //         description: 'Somthing went wrong',
                    //         position: 'top'
                    //     })
                    // }

                    axios.post(`https://play-game-api.onrender.com/users`, payload)
                        .then((r) => {
                            // console.log(r)
                            toast({
                                duration: 2500,
                                status: "success",
                                title: "Success",
                                description: 'Signup Successfull, Please login',
                                position: 'top'
                            })
                            setTimeout(() => {
                                navigate('/login')
                            }, 2000);
                        })
                        .catch((e) => {
                            console.log(e)
                            toast({
                                duration: 2500,
                                status: "error",
                                title: "Error",
                                description: 'Somthing went wrong',
                                position: 'top'
                            })
                        })
                }
                else {

                    toast({
                        duration: 2500,
                        status: "error",
                        title: "Error",
                        description: 'Already have account, Please login',
                        position: 'top'
                    })
                }

            } else {
                toast({
                    duration: 2500,
                    status: "error",
                    title: "Error",
                    description: 'Password doesnot match',
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
        <Box id={style.signup_main}>
            <div id={style.logo_div}>
                <img src="./logo.png" alt="" />
            </div>
            <div id={style.mainnn}>
                <Box id={style.signup_form}>
                    <FormControl>
                        <FormLabel fontSize='30px' color='orangered' fontWeight="600">Name*</FormLabel>
                        <Input fontSize='30px' fontWeight="600" name='name' color="#718096" value={formData.name} onChange={HandleChange} type="text" placeholder='Enter your Name' />
                        <FormLabel fontSize='30px' color='orangered' fontWeight="600" >Email*</FormLabel>
                        <Input fontSize='30px' fontWeight="600" name='email' color="#718096" value={formData.email} onChange={HandleChange} type="text" placeholder='Enter your Email' />
                        <FormLabel fontSize='30px' color='orangered' fontWeight="600">Password*</FormLabel>
                        <Input fontSize='30px' fontWeight="600" name='password' color="#718096" value={formData.password} onChange={HandleChange} type="text" placeholder='Enter your Password' />
                        <FormLabel fontSize='30px' color='orangered' fontWeight="600">Confirm Password*</FormLabel>
                        <Input fontSize='30px' fontWeight="600" name='confirmPassword' color="#718096" value={formData.confirmPassword} onChange={HandleChange} type="text" placeholder='Enter your Confirm Password' />

                        <Button id={style.btn} onClick={HandleSubmit} >Signup</Button>
                    </FormControl>
                </Box>
            </div>
        </Box>
    )
}
