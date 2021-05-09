export const cambiarValor2 = (e, func) => {
    const value = e.target.value
    if (value === '' || value === '0' || value === '.' || value === '1' || value === '1.' || value === '2'){
      return (func(value))
    }
  }