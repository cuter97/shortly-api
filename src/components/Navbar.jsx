import React, { useState } from 'react'
import { NavItems } from './NavItems'
import { NavLogin } from './NavItems'
import Logo from '../images/logo.svg'

const Navbar = () => {

    const [nav, setNav] = useState({
        open: false
    })

    const displayNavbar = ()=> {
        setNav({
            open: !nav.open
        })
        // console.log('click', nav)
    }

  return (
    <div className='header'>
        <a className='app-name' href='#top'>
            <img src={Logo} alt='app-logo' />
        </a>
        <div className='toggler' onClick={displayNavbar}>
            <div className={(nav.open) ? 'uno' : ''}></div>
            <div className={(nav.open) ? 'dos' : ''}></div>
            <div className={(nav.open) ? 'tres' : ''}></div>
        </div>
        <div className={(nav.open) ? 'desktop-navbar' : 'desktop-navbar active'}>
            <div className='general'>    
                {
                    NavItems.map((item, index) => (
                            <a key={index} className={item.class} href={item.url}>
                                {item.tittle}
                            </a>  
                    ))
                }
            </div>
            <span></span>
            <div className='verification'>
                {
                    NavLogin.map((item, index) => (
                            <a key={index} className={item.class} href={item.url}>
                                {item.tittle}
                            </a>  
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar