import React from 'react'
import { assets } from '../../assets/frontend_assets/assets.js'
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-icon">
            <a href="#">
                <img src={assets.logo} alt="icon" />
            </a>
        </div>

        <ul className="nav-list">
            <li>Home</li>
            <li>Collections</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <ul className="nav-list1">
          <li><img src={assets.search_icon} alt="" /> </li>
          <li><img src={assets.profile_icon} alt="" /></li>
          <li><img src={assets.cart_icon} alt="" /></li>
        </ul>
      
    </div>
  )
}
