import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Panel from "../pages/Panel/Panel";
import Error from "../pages/Error";
import { AuthContext } from "../context/AuthContext";

export default function Navigations() {

    const {auth}=useContext(AuthContext)

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={auth ? <Panel/> : <Login/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}
