import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from "./Cart.module.css"
export default function Cart() {

  let [cart, setCart] = useState([]);
  const toast = useToast();

  const HandleDelete = () => {
    axios.delete(`https://play-game-api.onrender.com/cart/${cart[0]?.id}`)
      .then((res) => {
        toast({
          duration: 3000,
          status: "success",
          title: "Successfull",
          description: 'Game deleted successfully',
          position: 'top'
        })

        axios.get('https://play-game-api.onrender.com/cart')
          .then((res) => {
            setCart([])
          })
          .catch((e) => {
            console.log(e)
          })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    axios.get('https://play-game-api.onrender.com/cart')
      .then((res) => {
        setCart(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <div id={style.cart_main}>
      {
        cart.length === 0 ? 'Add Game' : ''
      }
      {cart && cart.length > 0 && cart.map((el) => (
        <div id={style.single_div} key={el.id} >
          <div id={style.img_div}><img src={el.image} alt="" /></div>
          <p>{el.name}</p>
          <div id={style.buttonsDiv} >
            <button className={style.button1} ><Link to={'/checkout'} >Checkout</Link></button>
            <button className={style.button2} onClick={HandleDelete} >Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}
