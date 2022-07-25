import React from 'react'

const TableR = ({temperatura}) => {
  return (
    <table>
        <thead>
        <tr>
          <th>Temperatura</th>
          <th>Humedad</th>
          <th>Capacidad del tanque</th>
          <th>Luminosidad</th>
          <th>Temperatura del agua</th>
          <th>Estado de la bomba</th>
        </tr>
        </thead>
        tbody
    </table>
  )
}

export default TableR