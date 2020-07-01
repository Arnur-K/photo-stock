import React from 'react'

export default ({ label, icon, ariaLabel, margin = 'calc(10vh + 2.5rem) 0 0 0' }) => <h1
    style={{
        fontWeight: '300',
        textAlign: 'center',
        fontSize: '1.8rem',
        margin: margin
    }}>
    {label} <span role='img' aria-label={ariaLabel}>{icon}</span>
</h1>