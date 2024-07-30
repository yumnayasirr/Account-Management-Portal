import React from 'react'
import '../Navbar/Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div>
        <ul className="navbar">
            <li className="nav-item" onClick={()=>navigate('')}>
                
            </li>
        </ul>
    </div>
  )
}

export default Navbar