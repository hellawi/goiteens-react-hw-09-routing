import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <div>
        <header>
            <nav>
                <NavLink to='/' className={styles['link']}>Home</NavLink>
                <NavLink to='/movies' className={styles['link']}>Movies</NavLink>
            </nav>
        </header>
    </div>
  )
}

export default Header