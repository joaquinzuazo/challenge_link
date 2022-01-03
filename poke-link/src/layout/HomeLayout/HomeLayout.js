import React from 'react'
import TopMenu from '../../components/Home/TopMenu/TopMenu'
import './HomeLayout.scss'

export default function HomeLayout(props) {

    const {children}=props

    return (
        <div className='home-layout'>
            <div className='home-layout__menu'>
                <TopMenu />
            </div>
            <div className='home-layout__content'>
                {children}
            </div> 
        </div>
    )
}
