import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar_parent'>
      <img alt='item' className='item_image1' src='/images/item.png'/>
      <h1 className='navbar_title'> NAVBAR </h1>
      <img alt='item' className='item_image2' src='/images/item.png'/>
      <img alt='item' className='item_image3' src='/images/item.png'/>
    </div>
  )
}

export default Navbar