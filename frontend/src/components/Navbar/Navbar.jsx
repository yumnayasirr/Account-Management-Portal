import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div>
        <ul className="navbar">
            <a className="nav-item" href='../pages/login'>
                 <li>Log out</li>
            </a>
            <a className="nav-item">
                 <li></li>
            </a>
            <a className="nav-item">
                 <li></li>
            </a>
        </ul>
    </div>
  )
}

export default Navbar