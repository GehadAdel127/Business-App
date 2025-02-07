import React from 'react'
import './HelloImage.css'

const HelloImage = ({text}) => {
    return (
        <div className='helloImage'>
            <h4>{text}</h4>
        </div>
    )
}

export default HelloImage