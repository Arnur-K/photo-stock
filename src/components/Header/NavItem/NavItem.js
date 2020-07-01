import React from 'react'
import { NavLink } from 'react-router-dom'

import './navItem.scss'

export default ({ link, children }) =>
    <li className='list-item'>
        <NavLink to={link} className='link'>{children}</NavLink>
    </li>
