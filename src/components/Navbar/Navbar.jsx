import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="counter">Counter</Link>
        <Link to="product">Product</Link>
        <Link to="search">Search Filter</Link>
    </div>
  )
}

export default Navbar