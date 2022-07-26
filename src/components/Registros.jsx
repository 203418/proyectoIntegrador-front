import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import TableR from './TableR';


const Registros = () => {
  const [dataTemperaturePlant, setDataTemperaturePlant] = useState({});
  const [dataHumidity, setDataHumidity] = useState({});
  const [dataWaterDistance, setDataWaterDistance] = useState({});
  const [dataBrightness, setDataBrightness] = useState({});
  const [displayTable, setDisplayTable] = useState({});
  const [dataWaterTemperature, setWaterTemperature] = useState({});
  const [dataWaterPump, setDataWaterPump] = useState({});
  const [optionSelected, setOptionSelected] = useState({});

  useEffect(() => {
    initData();
    setDisplayTable(false);
  }, []);

  const initData = async () => {
    await axios.post("http://localhost:8000/api/plant-get", {
      code: "123456",
    }).then(response => {
      setDataTemperaturePlant(passData(response.data.plant_temperature, 'temperature'));
      setDataHumidity(passData(response.data.humidity, 'humidity'));
      setDataWaterDistance(passData(response.data.water_distance, 'distace'));
      setDataBrightness(passData(response.data.brightness, 'brightness'));
      setWaterTemperature(passData(response.data.water_temperature, 'temperature'));
      setDataWaterPump(passData(response.data.water_pump, 'status'));
    });
  };
  const passData = (array, key) => {
    const newArray = [];
    array.forEach((element) => {
      newArray.push(element[key]);
    });
    return newArray;
  };
  return (
    <div>
      <h1>Registros de la planta</h1>
      {dataTemperaturePlant.length > 0 && (
          <div className='_datos-table2'>
            <table className="table">
              <thead className='table-dark'>
              <tr>
                <th>Temperatura</th>
                <th>Humedad</th>
                <th>Capacidad del tanque</th>
                <th>Luminosidad</th>
                <th>Temperatura del agua</th>
                <th>Estado de la bomba</th>
              </tr>
              </thead>
              <tbody>
                {dataTemperaturePlant.map((data,i) => (<tr>
                  <td>{data}</td>
                  <td>{dataHumidity[i]}%</td>
                  <td>{dataWaterDistance[i]}%</td>
                  <td>{dataBrightness[i]}</td>
                  <td>{dataWaterTemperature[i]}°C</td>
                  <td>{dataWaterPump[i]}</td>
                </tr>))}
              </tbody>
            </table>
          </div>
        )}
    </div>
  )
}

export default Registros