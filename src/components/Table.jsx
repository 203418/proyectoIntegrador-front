import React from 'react'

const Table = ({table}) => {
  return (
    <div className='_datos-table'>
        <table className='table'>
            <thead className='table-dark'>
                <tr>
                    <th>Clases</th>
                    <th>Limites</th>
                    <th>Limites exactos</th>
                    <th>Frecuencias</th>
                    <th>Frecuencias relativas</th>
                    <th>Marcas de clase</th>
                    <th>Frecuencias acumuladas</th>
                    <th>Frecuencias complementarias</th>
                </tr>
            </thead>
            <tbody>
                    {
                        table.clases.map((item,i) => (
                            <tr key={item}>
                                <td key={item + i}>{table.clases[i]}</td>
                                <td key={item + (i +1)}>{table.li.li[i]} - {table.li.ls[i]}</td>
                                <td key={item + (i + 2)}>{table.li.lie[i]} - {table.li.lse[i]}</td>
                                <td key={item + (i + 3)}>{table.frecuencias.fabs[i]}</td>
                                <td key={item + (i + 4)}>{table.frecuencias.fre[i]}</td>
                                <td key={item + (i + 5)}>{table.mc[i]}</td>
                                <td key={item + (i + 6)}>{table.frecuencias.facum[i]}</td>
                                <td key={item + (i + 7)}>{table.frecuencias.fcom[i]}</td>
                            </tr>
                        ))
                    }
            </tbody>
        </table>
    </div>
  )
}

export default Table