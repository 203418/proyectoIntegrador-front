import React from 'react'
import {Routes,Route, Link,} from 'react-router-dom';
import Hipotesis from './Hipotesis';
import Home from './Home';
import ParseExcel from './ParseExcel';
import Registros from './Registros';

const AppRouter = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light nav_router">
    <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">DashBoard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/registros">Registros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/estadistica">Cálculos estadísticos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/hipotesis_nula">Hipótesis nula</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                
                <Route path='/estadistica' element={<ParseExcel/>}/>
                <Route path='/registros' element={<Registros/>}/>
                <Route path='/hipotesis_nula' element={<Hipotesis/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default AppRouter