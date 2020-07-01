import React from 'react'

import NavItem from './NavItem/NavItem'

import './header.scss'

export default () => (
    <div className='header'>
        <nav className='header__nav'>
            <ul className='header__nav-list'>
                <NavItem link='/'>Main</NavItem>
                <NavItem link='/search-history'>Search History</NavItem>
                <NavItem link='/favorites'>Favourites</NavItem>
            </ul>
        </nav>
    </div>
)
