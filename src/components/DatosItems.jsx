import React from 'react'

const DatosItems = ({d,i,datos}) => {
  return (
    <span className='_datos-span'> {d}{i!==(datos.length - 1) && ','}</span>
  )
}

export default DatosItems