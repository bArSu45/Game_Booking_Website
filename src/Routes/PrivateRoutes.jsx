import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoutes({ children }) {
    let isAuth = JSON.parse(localStorage.getItem('isAuth')) || false;

    if (!isAuth) {
        return <Navigate to='/login' />
    }
    return children
}
