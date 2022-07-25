import React, { useState, useEffect } from "react";
import { medidasDeDispersion } from "../actions/mDispersion";
import { obtenerMedidasTendenciaCentral } from "../actions/medidasTC";
import { obtenerTable } from "../actions/obtenertable";
import { obtenerOBasica } from "../actions/operacionesBasicas";
import { numberPar } from "../actions/Order";
import { promiseE } from "../actions/readExcel";
import { post, get } from "axios";
import Datos from "./Datos";
import GraficaH from "./GraficaH";
import GraficaP from "./GraficaP";
import MDispersion from "./MDispersion";
import OperacionesBasicas from "./OperacionesBasicas";
import Table from "./Table";
import TendenciaCentral from "./TendenciaCentral";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Registro from "./Registro";
import Registros from "./Registros";
import Estadictica from "./Estadictica";

const ParseExcel = () => {
  const [items, setItems] = useState([]);
  const [ordenado, setOrdenados] = useState([]);
  const [operacionesB, setOperacionesB] = useState({});
  const [tabla, setTabla] = useState({});
  const [mTC, setMTC] = useState({});
  const [mDispersion, setMDispersion] = useState({});
  const [dataTemperaturePlant, setDataTemperaturePlant] = useState({});
  const [dataHumidity, setDataHumidity] = useState({});
  const [dataWaterDistance, setDataWaterDistance] = useState({});
  const [dataBrightness, setDataBrightness] = useState({});
  const [dataWaterTemperature, setWaterTemperature] = useState({});
  const [dataWaterPump, setDataWaterPump] = useState({});
  const [optionSelected, setOptionSelected] = useState({});
  const [displayTable, setDisplayTable] = useState({});

  useEffect(() => {
    initData();
    setDisplayTable(false);
  }, []);

  const initData = async () => {
    const response = await post("http://192.168.0.34:8000/api/plant-get", {
      code: "123456",
    });
      setDataTemperaturePlant(passData(response.data.plant_temperature, 'temperature'));
      setDataHumidity(passData(response.data.humidity, 'humidity'));
      setDataWaterDistance(passData(response.data.water_distance, 'distace'));
      setDataBrightness(passData(response.data.brightness, 'brightness'));
      setWaterTemperature(passData(response.data.water_temperature, 'temperature'));
      setDataWaterPump(passData(response.data.water_pump, 'status'));
  };

  const passData = (array, key) => {
    const newArray = [];
    array.forEach((element) => {
      newArray.push(element[key]);
    });
    return newArray;
  };

  let option = 0;

  return (
    <div>
         <nav>
            <button onClick={()=>{option=1}}>Último registro</button>
            <button onClick={()=>{option=2}}>Registros</button>
            <button onClick={()=>{option=3}}>Cálculos Estadísticos</button>
          </nav> 
          {
            option === 1 ? <Registro /> : option===2 ? <Registros /> : <Estadictica dataTemperaturePlant={dataTemperaturePlant} dataWaterDistance={dataWaterDistance} dataHumidity={dataHumidity} dataBrightness={dataBrightness}/>
          }
    </div>
  );
};

export default ParseExcel;
