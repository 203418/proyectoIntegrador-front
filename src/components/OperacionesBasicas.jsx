import React from 'react'

const OperacionesBasicas = ({opBasicas}) => {
  return (
    <div>
        <h1>Operaciones basicas</h1>
        <p className='_datos-operaciones-title'>
            <span className='_datos-span-op'>k: </span> {opBasicas.k}, <span className='_datos-span-op'>rango: </span>{opBasicas.rango}, <span className='_datos-span-op'>amplitud: </span> {opBasicas.amplitud}
        </p>
    </div>
  )
}

export default OperacionesBasicas