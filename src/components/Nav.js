import './Nav.css';
import { useState } from 'react';
import React from 'react'


function Nav() {

  const [show,setShow]=useState(false)

  window.addEventListener('scroll',()=>{
    if(window.scrollY>650){
      setShow(true)
    }
    else setShow(false)
    
  })
  console.log(show)

  return (
    <div className={`nav ${show && "nav_black"}`}>
        
        <img className='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png'  
             alt='Netflix logo'/>
        
    </div>
  )
}

export default Nav