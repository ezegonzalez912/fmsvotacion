export const cambiarValor = (e, func) => {
    const value = e.target.value
    if (value === '' || value === '0' || value === '0.' || value === '.' || value === '1' || value === '1.' || value === '2' || value === '2.' || value === '3' || value === '3.' || value === '4'){
      return (func(value))
    }
  }