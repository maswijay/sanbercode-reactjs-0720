import React, { useContext } from 'react';
import {Switch, Link, Route} from 'react-router-dom'
import './Routes.css'

import Tugas11 from '../tugas11/Tugas11'
import Clock from '../tugas12/Tugas12';
import ListBuah13 from '../tugas13/ListBuah13';
import ListBuah14 from '../tugas14/ListBuah14';
import Buah from './Buah';
// import { ThemeProvider, ThemeContext } from './ThemeContext';

const Routes = () => {
    // const [theme] = useContext(ThemeContext)
    return (
        <>
        {/* <ThemeProvider> */}
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Tugas11</Link>
                    </li>
                    <li>
                        <Link to='/tugas12'>Tugas12</Link>
                    </li>
                    <li>
                        <Link to='/tugas13'>Tugas13</Link>
                    </li>
                    <li>
                        <Link to='/tugas14'>Tugas14</Link>
                    </li>
                    <li>
                        <Link to='/tugas15'>Tugas15</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path='/tugas15'>
                    <Buah />
                </Route>
                <Route path='/tugas14'>
                    <ListBuah14 />
                </Route>
                <Route path='/tugas13'>
                    <ListBuah13 />
                </Route>
                <Route path='/tugas12'>
                    <Clock />
                </Route>
                <Route path='/'>
                    <Tugas11 />
                </Route>
            </Switch>
            
        {/* </ThemeProvider> */}
            
        </>
    )
}

export default Routes