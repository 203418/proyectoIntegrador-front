import React from 'react'

const MDispersion = ({medidas}) => {
  return (
    <div>
        <h1>Medidas de dispersion</h1>
        <div className="medidas">
            <p>Rango: {medidas.rango}</p>
            <p>Desviación media: {medidas.desviacionMedia}</p>
            <p>Varianza: {medidas.varianza}</p>
            <p>Desviación estandar: {medidas.dEstandar}</p>
        </div>
    </div>
  )
}

export default MDispersion