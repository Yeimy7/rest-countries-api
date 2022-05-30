function esObjetoEstandar(objeto){
    return Object.prototype.toString.call(objeto)==='[object Object]'
}

export const getValuesOfObject = (objeto) => {
  if(!esObjetoEstandar(objeto)){
      throw TypeError('El argumento debe ser un objeto.')
  }
    return Object.values(objeto)
}
