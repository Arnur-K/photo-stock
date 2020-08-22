import React from 'react'
import Header from '../Header/Header'
import './Layout.scss'

export default ({ children }) =>
  <>
    <Header />
    <main className='layout'>
      {children}
    </main>
  </>
