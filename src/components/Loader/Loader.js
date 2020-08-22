import React from 'react'
import './Loader.scss'

export default () => (
  <div className='loader'>
    <span>&#9679;</span>
    <span style={{ '--delay': '0.1s' }}>&#9679;</span>
    <span style={{ '--delay': '0.3s' }}>&#9679;</span>
  </div>
)