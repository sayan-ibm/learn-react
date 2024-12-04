import React from 'react'
import "./Blog.css"

const Navbar = () => {
  return (
    <div className='nav-container'>
        <h1>The Blog</h1>
        <div className="menu">
            <div>Home</div>
            <button>New Blog</button>
        </div> 
        <div className='blog-container'>
        
        </div>
    </div>
  )
}

export default Navbar