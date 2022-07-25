import React from 'react'
import DatosItems from './DatosItems'

const Datos = ({datos, type}) => {
  return (
    <div className='_datos-super-content'>
        <p className='_datos-content'>Datos {type}: </p>
        <div className="_datos-content-text">
            {datos?.map((d,i) => (
                <DatosItems key={i} d={d} i={i} datos={datos}/>
            ))}
        </div>
    </div>
  )
}

export default Datos