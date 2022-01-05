import React, {useContext} from 'react'
import { Button } from 'semantic-ui-react'
import { AuthContext } from '../../context/AuthContext'
import { Menu, Icon } from 'semantic-ui-react'
import './Panel.scss'


export default function Panel() {

    const {logout, auth}=useContext(AuthContext)
    return (
        <div>
            <Menu fixed='top' className='top-menu-panel'>
                <Menu.Item className='top-menu-panel__logo'>
                    <p>Hola, {auth.me.username}</p>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item onClick={logout} >
                        <Icon name='sign-out' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}
