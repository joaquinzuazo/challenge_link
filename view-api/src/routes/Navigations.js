import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Panel from "../pages/Panel/Panel";
import Error from "../pages/Error";

export default function Navigations() {

    const auth=null

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Login/>  } />
                <Route path='/me' element={auth ? <Panel/> : <Login/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}
