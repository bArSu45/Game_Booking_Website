import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart/Cart'
import Checkout from '../Pages/Checkout/Checkout'
import Games from '../Pages/Games/Games'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import NotFound from '../Pages/NotFound'
import Signup from '../Pages/SignUp/Signup'
import PrivateRoutes from './PrivateRoutes'

export default function AllRoutes({ isAuth, setIsAuth, userName, setUserName }) {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login isAuth={isAuth} setIsAuth={setIsAuth} userName={userName} setUserName={setUserName} />} />
            <Route path='/games' element={<PrivateRoutes><Games /></PrivateRoutes>} />
            <Route path='/cart' element={<PrivateRoutes><Cart /></PrivateRoutes>} />
            <Route path='/checkout' element={<PrivateRoutes><Checkout /></PrivateRoutes>} />
            <Route path='*' element={< NotFound />} />
        </Routes>
    )
}
