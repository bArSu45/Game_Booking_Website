import { Box, Heading, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import style from "./Games.module.css"
export default function Games() {
  const toast = useToast();
  let [cart, setCart] = useState([]);
  const [games, setGames] = useState([])

  const HandleCart = (data) => {
    if (cart.length <= 0) {

      axios.post('https://play-game-api.onrender.com/cart', data)
        .then((res) => {
          setCart(res.data);
        })
        .catch((e) => {
          console.log(e);
        });

      toast({
        duration: 3000,
        status: "success",
        title: "Congratulations",
        description: 'Game added to cart successfully',
        position: 'top'
      })
    } else {
      toast({
        duration: 3000,
        status: "error",
        title: "Error",
        description: 'You can only add one game at a time',
        position: 'top'
      })
    }

  }

  useEffect(() => {
    axios.get('https://play-game-api.onrender.com/games')
      .then((res) => {
        setGames(res.data)
      })
      .catch((e) => {
        console.log(e)
      })

    axios.get('https://play-game-api.onrender.com/cart')
      .then((res) => {
        setCart(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <div id={style.game_main_div}>
      <div id={style.game_grid}>

        {games && games.length > 0 ? games.map((el) => (
          <div id={style.game_desc} key={el.id}>
            <div id={style.game_img}>
              <img src={el.image} alt="" />
            </div>
            <p>{el.name}</p>
            <button id={style.btn} onClick={() => HandleCart(el)} >Add to Cart</button>
          </div>
        ))
          : <Box width={'400%'} minHeight={'70vh'} display='flex' alignItems={'center'} justifyContent={'center'} >
            <Heading>Loading...</Heading>
          </Box>
        }
      </div>
    </div>
  )
}
