 const calcularH = (numDatos, arrDatos, arrDatMuestra, media, mediaMuestra, varianzaF) => {
    var resultadoFinal = '';


    var mediaMuestra = 0
    const muestraPoblacion=((numDatos*1.96*0.5*0.5)/((0.03*0.03)*(numDatos-1)+1.96+0.5+0.5));
    var arrDatMuestra = [];
    const muestraPoblacionR = Math.round(muestraPoblacion)
    console.log("Esta es la muestra de la poblacion " + muestraPoblacionR);
    
    
    var delta = Math.floor( arrDatos.length / muestraPoblacionR );
    console.log("Valor de Delta" + delta);
    for (let i = delta; i < arrDatos.length; i=i+delta) {
      mediaMuestra = mediaMuestra + arrDatos[i]
      arrDatMuestra.push(arrDatos[i])
      console.log(mediaMuestra);
    }
    var sumaDatosMuestra = mediaMuestra
    mediaMuestra = mediaMuestra/muestraPoblacionR
     console.log("Valor de la media de la muestra" + mediaMuestra);
     console.log("Valor de la población de la muestra" +  media);
     console.log((Math.pow(varianzaF,1/2).toFixed(3)));
     const valorZc = (mediaMuestra - media) / ((Math.pow(varianzaF,1/2).toFixed(3)) / Math.sqrt(muestraPoblacionR));
     console.log(valorZc);
    
     let desviacionMuestra=Math.sqrt(sumaDatosMuestra/arrDatos.length);
    
    
    
    if (valorZc <= -1.96 || valorZc >= 1.96) {
      resultadoFinal = "Hipótesis alternativa ACEPTADA"
    } else {
      resultadoFinal = "Hipótesis alternativa RECHAZADA"
    }
    
      console.log(resultadoFinal);
 }