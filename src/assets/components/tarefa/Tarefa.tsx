import { useEffect, useState } from "react"

function Tarefa() {
    const [isCompletado, setIsCompletado] = useState(false)
    const [tarefa, setTarefa]= useState('')

    useEffect(() =>{
        if(isCompletado){
        setTarefa('Parabéns! Você concluiu a tarefa')
        }
        }), [isCompletado]
        
  return (
    <><div>Tarefa</div><div>
          <h3>{tarefa}</h3>
          <p>Conclua a tarefa.</p>
          <button onClick={() => setIsCompletado(true)}>Concluir</button>
      </div></>
  )
}

export default Tarefa