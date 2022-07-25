import React, { useState, useEffect } from "react";
import { medidasDeDispersion } from "../actions/mDispersion";
import { obtenerMedidasTendenciaCentral } from "../actions/medidasTC";
import { obtenerTable } from "../actions/obtenertable";
import { obtenerOBasica } from "../actions/operacionesBasicas";
import { numberPar } from "../actions/Order";
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
    const response = await post("http://localhost:8000/api/plant-get", {
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

  const changeView = (option, array) => {
    console.log(array);
    readExcel(array);
    setOptionSelected(option);
  };

  const readExcel = (d) => {
    console.log(d);
    setItems(d);
    let datos = [...d];
    let datosO = numberPar(datos);
    setOrdenados(datosO);
    let op = obtenerOpBasicas(datosO);
    setOperacionesB(op);
    let table = obtenerTabla(datosO, op);
    setTabla(table);
    let mtc = obtenerMTC(table, op, datosO);
    setMTC(mtc);
    let mDisper = medidasDeDispersion(table, mtc);
    setMDispersion(mDisper);
  };

  const obtenerOpBasicas = (datos) => {
    let op = obtenerOBasica(datos);
    return op;
  };

  const obtenerMTC = (tabla, operaciones, datos) => {
    let medidas = obtenerMedidasTendenciaCentral(
      tabla,
      operaciones,
      datos.length
    );
    return medidas;
  };

  const obtenerTabla = (ordenado, op) => {
    let tabla = obtenerTable(ordenado, op);
    return tabla;
  };

  return (
    <div>
      <div >
        <div>
          <Container className="container_nav">
            <Row>
              <Col>
                {optionSelected === 1 ? (
                  <Button className="selected">Temperatura de la planta</Button>
                ) : (
                  <Button className="button" onClick={() => changeView(1, dataTemperaturePlant)}>
                    Temperatura de la planta
                  </Button>
                )}
              </Col>
              <Col>
                {optionSelected === 2 ? (
                  <Button className="selected">Humedad</Button>
                ) : (
                  <Button className="button" onClick={() => changeView(2, dataHumidity)}>
                    Humedad
                  </Button>
                )}
              </Col>
              <Col>
                {optionSelected === 3 ? (
                  <Button className="selected">Distancia del agua</Button>
                ) : (
                  <Button className="button" onClick={() => changeView(3, dataWaterDistance)}>
                    Distancia del agua
                  </Button>
                )}
              </Col>
              <Col>
                {optionSelected === 4 ? (
                  <Button className="selected">Luminosidad</Button>
                ) : (
                  <Button className="button" onClick={() => changeView(4, dataBrightness)}>
                    Luminosidad
                  </Button>
                )}
              </Col>
            </Row>
          </Container>
        </div>
        {items.length > 0 && (
          <div className="">
            <h1>Trabajando con:</h1>
            <Datos datos={items} type={"sin ordenar"} />
            <Datos datos={ordenado} type={"ordenados"} />
            <OperacionesBasicas opBasicas={operacionesB} />
            <Table table={tabla} />
            <TendenciaCentral medidas={mTC} tabla={tabla} />
            <MDispersion medidas={mDispersion} />
            <h1>Gráficas</h1>
            <div className="contain-g">
              <GraficaH mc={tabla.mc} fabs={tabla.frecuencias.fabs} />
              <GraficaP mc={tabla.mc} fabs={tabla.frecuencias.fabs} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParseExcel;
