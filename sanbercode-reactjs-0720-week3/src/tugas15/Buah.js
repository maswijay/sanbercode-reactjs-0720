import React, { useContext } from 'react'
import {BuahProvider} from './BuahContext'
import BuahList from './BuahList'
import BuahForm from './BuahForm'
// import { ThemeContext } from './ThemeContext'


const Buah = () =>{
    // const [theme, setTheme] = useContext(ThemeContext)

    // const changeTheme = () => {
    //     setTheme(theme === 'dark' ? 'light' : 'dark')
    // }

    return(
        <>
    <button>Change Navbar to</button>
        <BuahProvider>
            <BuahList/>
            <BuahForm/>
        </BuahProvider>
    </>
    )
}

export default Buah