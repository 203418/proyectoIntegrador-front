import React from 'react'

const Hipotesis = () => {
  return (
    <div>
        <h1>Hipótesis nula 1:</h1>
        <div>
            <p>El sensor de temperatura marca una temperatura promedio de 25°C. Una muestra aleatoria de 40 datos sobre la temperatura 
            , con una media de 27.93°C, con una desviación estandar de 16.40°C. Se pide comprobar si hay evidencias suficientes para 
            rechazar la afirmación, con un nivel de significancia del 5%.
            </p>
            <p><span>Hipótesis nula: la temperatura es de al menos 26°C</span></p>
            <p><span>Hipotesis alternativa: La temperatura es menor a 26°C</span></p>
            <h3><b>Hipótesis</b></h3>
                <h4>Los Datos necesarios son: </h4>
                <h5>Media de Población: {26} </h5>
                <h5>Media de la Muestra: {27.95}</h5>
                <h5>Desv Estandar de la poblacion: {16.40}</h5>
                <h5>Desv Estandar de la muestra: {15.23}</h5>
                <h5>Tamaño de la muestra: {40}</h5>
                <h5>Tamaño de la población: {115}</h5>
                <h5>Margen de Error: 3%</h5>
                <h5>Significancia: 5%</h5>
                <h5>Nivel de Confianza: 95%</h5>
                <h5>Valor Z: {0.7520}</h5>
                <h5>Hipótesis Resultante: La temperatura tiene al menos 26°C</h5>
            <p><span></span></p>
        </div>
        <h1>Hipótesis nula 2:</h1>
        <div>
            <p>El sensor de humedad marca una humedad promedio de 79%. Se hizo una prueba de con 38 datos sobre la humedad, con una media de 79.50, con una desviación
                 estándar de 12.1.
            <br />Se pide comprobarsi hay evidencia suficiente para rechazar la afirmación, con un nivel de significancia del 5%.
            </p>
            <h3><b>Hipótesis</b></h3>
                <h4>Los Datos necesarios son: </h4>
                <h5>Media de Población: {79.750} </h5>
                <h5>Media de la Muestra: {79}</h5>
                <h5>Desv Estandar de la poblacion: {12.1}</h5>
                <h5>Desv Estandar de la muestra: {11.95}</h5>
                <h5>Tamaño de la muestra: {38}</h5>
                <h5>Tamaño de la población: {115}</h5>
                <h5>Significancia: 5%</h5>
                <h5>Nivel de Confianza: 95%</h5>
                <h5>Valor Z: {0.2547}</h5>
                <h5>Hipótesis Resultante: La humedad es de al menos 79%</h5>
            <p><span></span></p>
        </div>
    </div>
  )
}

export default Hipotesis