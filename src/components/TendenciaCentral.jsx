import React from 'react'

const TendenciaCentral = ({medidas}) => {
  return (
    <div>
        <h1>Medidas de tendencia central</h1>
        <div className="medidas">
          <p>Media: {medidas.media}</p>
          <p>Mediana: {medidas.mediana}</p>
          <p>Moda: {medidas.moda}</p>
        </div>
    </div>
  )
}

export default TendenciaCentral