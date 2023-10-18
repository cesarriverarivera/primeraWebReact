import React from 'react'
import Menu from '../Menu/Menu'
import { Outlet } from 'react-router-dom'

export default function Home () {

    return (
        <>
        <Menu/>
        <Outlet/>
        </>
    )
}