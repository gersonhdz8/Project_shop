import { Link } from 'react-router-dom';
import React from 'react'

export default function Header({children}) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/categoria/1">Zapatos Deportivos</Link>
            <Link to="/categoria/2">Camisas Oversize</Link>
            <Link to="/categoria/3">Pantalones</Link>
            <Link to="/categoria/4">Chaquetas</Link>
            <Link to="/categoria/5">Pantalones</Link>            
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}
