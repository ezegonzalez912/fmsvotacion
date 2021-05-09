//RECIBE UN STRING Y DEVUELVE UN NUMERO (0 EN CASO DE SER '' - AGREGA 0.5 EN CASO DE HABER UN PUNTO - EL STRING PASADO A NUMERO SI NO SUCEDE NADA DE LO ANTERIOR)

export const funcionInput = (num) => {
    if(num === ''){
      return parseFloat(0)
    }else if(num === `${parseInt(num)}.`){
      return parseFloat(num) + 0.5
    }else if(num === '.'){
      return 0.5
    }else{
      return parseFloat(num)
    }
  }