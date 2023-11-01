import {useState} from 'react'

function Curtir() {
    const [valor, setValor] = useState(0);
    function somarMaisUm(){
        setValor(valor + 1)}
  return (
    <div>
        <p>Curtidas: {valor}</p>
        <button onClick={somarMaisUm}>Curtir</button>
    </div>
  )
}

export default Curtir