import React from 'react'

export default ({ label, margin = 'calc(10vh + 2.5rem) 0 0 0' }) =>
    <h1
        style={{
            fontWeight: '300',
            textAlign: 'center',
            fontSize: '1.8rem',
            margin: margin
        }}>
        {label}
    </h1>