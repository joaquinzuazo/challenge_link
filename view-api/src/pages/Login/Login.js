import React, { useState, useContext } from 'react'
import {Form, Button, Header } from 'semantic-ui-react'
import { loginApi } from '../../api/user'
import { AuthContext } from '../../context/AuthContext'
import './Login.scss'

export default function Login() {

    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [errors, setErrors]=useState(null)

    const {login} =useContext(AuthContext)


    const handleChange=(e)=>{
        if(e.target.name==='username'){
            setUsername(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    const handleSubmit= async()=>{
        try {
            const response=await loginApi({'username':username,'password':password})
            const {access}=response
            login(access)
        } catch (error) {
            console.log(errors)
        }
    }

    return (
        <div className='login-form-div'>
            <Header as='h2'>
                Login
                <Header.Subheader>
                Ingrese sus datos a continuacion para iniciar sesion
                </Header.Subheader>
            </Header>
            <Form className='login-form-div__form' onSubmit={handleSubmit}>
                <Form.Input 
                    name='username'
                    placeholder='Username'
                    value={username}
                    onChange={handleChange}
                />
                <Form.Input 
                    name='password'
                    type='password'
                    placeholder='Contraseña'
                    value={password}
                    onChange={handleChange}
                />
                <Button type='submit' content='Iniciar sesion' primary fluid />
            </Form>
        </div>
    )
}
