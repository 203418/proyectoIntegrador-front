import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,} from 'chart.js';

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

const GraficaH = ({mc, fabs}) => {
    const data = {
        labels:[...mc],
        datasets:[{
            label: 'Frecuencia',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderWidth: 1,
            data: [...fabs]
        }]
    };
    const opciones = {
        maintainAspectRatio: false,
        responsive: true
    }
  return (
    <div className='graficas graficaH'>
        <h2>
            Gráfica de barras
        </h2>
        <Bar data={data} options={opciones}/>
    </div>
  )
}

export default GraficaH