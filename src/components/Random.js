function Random({max, min}) {

    const valor = Math.random() * (max - min) + min
    let novoValor = `Random between ${min} and ${max} => ${Math.floor(valor)}`

    return (


    <div className = "Random">
        {novoValor}
    </div>)
  }
  
  export default Random;