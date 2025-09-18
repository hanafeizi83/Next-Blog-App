import React from 'react'
import { ClipLoader } from 'react-spinners'

function Loading({ size = '30px' }) {
    return (
        <ClipLoader
            color='#00000'
            size={size}
        />
    )
}

export default Loading
