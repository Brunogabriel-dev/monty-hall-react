import { useState } from "react"
import Porta from "../components/Porta";
import {atualizarPortas, criarPortas} from "../functions/portas"
import PortaModel from "../model/porta";

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(3, 2))

  function renderizarPortas() {
    return portas.map(Porta => {
      return <Porta key={Porta.numero} value={Porta} onChange={novaPorta => atualizarPortas (portas, novaPorta)} />
    })
  }
  
  return (
    <div style={{display: "flex"}}>
      {renderizarPortas()}
    </div>
  )
}
