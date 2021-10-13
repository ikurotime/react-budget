import React,{ Fragment, useState} from 'react'
import Error from './Error'

export default function Pregunta({setPresupuesto, setRestante, setPregunta}) {

    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)
    // Leer presupuesto
    const handleChange = e => {
        setCantidad(parseInt(e.target.value, 10))
    }
    const agregarPresupuesto = e => {
        e.preventDefault()
        // Validar
        if(cantidad < 1 || isNaN (cantidad )){
            setError(true)
            return
        }
        //Si se valida
        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setPregunta(false)
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error mensaje='El presupuesto es incorrecto'/> : null}
            <form onSubmit={agregarPresupuesto}>
                <input
                type='number'
                className='u-full-width'
                placeholder='Coloca tu presupuesto'
                onChange={handleChange}
                />
                <input
                type='submit'
                className='button-primary u-full-width'
                value='Definir Presupuesto'
                />
            </form>
        </Fragment>
    )
}
