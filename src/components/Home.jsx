import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
const Home = () => {
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
      <h1>Último registro</h1>
      <div className='sup_content'>
      {dataTemperaturePlant.length > 0 && (
          <div className='container_last'>
            <div><span>Temperatura: </span> {dataTemperaturePlant[dataTemperaturePlant.length -1]}</div>
            <div><span>Humedad: </span>{dataHumidity[dataTemperaturePlant.length -1]}%</div>
            <div><span>Capacidad del tanque: </span> {dataWaterDistance[dataTemperaturePlant.length -1]}%</div>
            <div><span>Luminosidad: </span>{dataBrightness[dataTemperaturePlant.length -1]}%</div>
            <div><span>Temperatura del agua: </span>{dataWaterTemperature[dataTemperaturePlant.length -1]}°C</div>
            <div><span>Estado de la bomba: </span>{dataWaterPump[dataTemperaturePlant.length -1]}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home