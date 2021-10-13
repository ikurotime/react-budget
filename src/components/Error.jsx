import React from 'react'

export default function Error({mensaje}) {
    return (
        <p className='alert alert-danger error'>
            {mensaje}
        </p>
    )
}
