import React from 'react'

export default function Gasto({gasto}) {
    return (
        <li className="gastos">
            <p>
                {gasto.nombre}
                <span className="gasto">$ {gasto.cantidad}</span>
            </p>
        </li>
    )
}
