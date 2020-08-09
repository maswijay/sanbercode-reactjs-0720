import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import './index.css'
import Home from './home'
import About from './about'

const Router = () =>{
    return(
      <>
        <div className='navbar'>
          <img src='img/logo.png' alt='logo'/>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <button>Login</button>
            </ul>
          </nav>
        </div>

        <Switch>        
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      
        
    </>
    )
}

export default Router