import React from 'react'
import './Photo.scss'

export default ({ config }) => <img src={config.webformatURL} alt={config.tags} className='photo' />