import React from 'react'

import Header from '../Header/Header'

import './layout.scss'

export default ({ children }) => {
    return (
        <>
            <Header />
            <main className='layout'>
                {children}
            </main>
        </>
    )
}