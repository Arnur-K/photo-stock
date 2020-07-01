import React from 'react'

import './photo.scss'

export default ({ config }) => <img src={config.webformatURL} alt={config.tags} className='photo' />